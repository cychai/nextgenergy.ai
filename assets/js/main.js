export const GA_MEASUREMENT_ID = 'G-SQ8WX1BMRW';
export const ANALYTICS_CONSENT_KEY = 'nextgenergy:analytics-consent';

const ANALYTICS_STATE_KEY = '__nextgenergyAnalyticsState';
const GA_SCRIPT_ID = 'nextgenergy-ga4-script';
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`;
const PRODUCTION_HOSTS = new Set(['nextgenergy.ai', 'www.nextgenergy.ai']);

const initializeNavigation = (document) => {
  const toggle = document?.querySelector?.('[data-nav-toggle]');
  const navigation = document?.querySelector?.('[data-nav]');
  if (!toggle || !navigation) return;

  const closeNavigation = () => {
    navigation.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', 'false');
    const label = toggle.querySelector('.sr-only');
    if (label) label.textContent = 'Open navigation';
  };

  toggle.addEventListener('click', () => {
    const open = !navigation.hasAttribute('data-open');
    if (open) navigation.setAttribute('data-open', '');
    else navigation.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', String(open));
    const label = toggle.querySelector('.sr-only');
    if (label) label.textContent = open ? 'Close navigation' : 'Open navigation';
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
};

const initializeContactStatus = (browserWindow, document) => {
  const status = document?.querySelector?.('[data-contact-status]');
  if (!status || !browserWindow?.location) return;

  const params = new URLSearchParams(browserWindow.location.search);
  if (params.get('submitted') === 'true') status.hidden = false;
};

const initializeContactValidation = (document) => {
  const form = document?.querySelector?.('.contact__form');
  if (!form) return;

  const messages = {
    email: 'Please enter a valid email address.',
    first_name: 'Please enter your first name.',
    last_name: 'Please enter your last name.',
    message: 'Please tell us how we can help.',
    phone: 'Please enter your phone number.',
  };

  for (const field of form.querySelectorAll('input[required], textarea[required]')) {
    field.addEventListener('invalid', () => {
      field.setCustomValidity(field.validity.typeMismatch
        ? 'Please enter a valid email address.'
        : messages[field.name] || 'Please complete this field.');
    });
    field.addEventListener('input', () => field.setCustomValidity(''));
  }
};

export const isAnalyticsProductionHost = (hostname) => PRODUCTION_HOSTS.has(hostname);

const readConsent = (storage) => {
  try {
    return storage?.getItem(ANALYTICS_CONSENT_KEY) ?? null;
  } catch {
    return null;
  }
};

const saveConsent = (storage, value) => {
  try {
    storage?.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // A choice remains effective for this page even when storage is unavailable.
  }
};

const expireAnalyticsCookies = (browserWindow, document) => {
  let cookieNames = [];
  try {
    cookieNames = (document.cookie || '')
      .split(';')
      .map((cookie) => cookie.trim().split('=')[0])
      .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  } catch {
    return;
  }

  const pathname = browserWindow.location?.pathname || '/';
  const pathParts = pathname.split('/').filter(Boolean);
  const paths = new Set(['/']);
  let path = '';
  for (const part of pathParts) {
    path += `/${part}`;
    paths.add(path);
  }
  const hostname = browserWindow.location?.hostname;
  const domains = new Set(hostname ? ['', `; Domain=${hostname}`, `; Domain=.${hostname}`] : ['']);
  if (hostname === 'www.nextgenergy.ai') {
    domains.add('; Domain=nextgenergy.ai');
    domains.add('; Domain=.nextgenergy.ai');
  }

  for (const name of cookieNames) {
    for (const cookiePath of paths) {
      for (const domain of domains) {
        try {
          document.cookie = `${name}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${cookiePath}${domain}; SameSite=Lax`;
        } catch {
          // Continue removing other accessible analytics cookies.
        }
      }
    }
  }
};

export const createAnalyticsController = ({ window: browserWindow, document, storage }) => {
  const banner = document?.querySelector?.('[data-analytics-consent]') ?? null;
  const acceptButton = document?.querySelector?.('[data-analytics-accept]') ?? null;
  const declineButton = document?.querySelector?.('[data-analytics-decline]') ?? null;
  const manageButton = document?.querySelector?.('[data-analytics-manage]') ?? null;
  const status = document?.querySelector?.('[data-analytics-status]') ?? null;
  let listenersAttached = false;
  let currentConsent = null;

  const hideBanner = () => {
    if (banner) banner.hidden = true;
  };

  const updateStatus = () => {
    if (!status) return;
    if (currentConsent === 'granted') status.textContent = 'Analytics is currently enabled.';
    else if (currentConsent === 'denied') status.textContent = 'Analytics is currently disabled.';
    else status.textContent = 'No analytics choice has been saved.';
  };

  const showBanner = ({ focus = false } = {}) => {
    updateStatus();
    if (banner) {
      banner.hidden = false;
      if (focus) banner.focus?.();
    }
  };

  const ensureGtag = () => {
    browserWindow.dataLayer = browserWindow.dataLayer || [];
    browserWindow.gtag = browserWindow.gtag || function gtag() {
      browserWindow.dataLayer.push(arguments);
    };
  };

  const clearPendingInitialization = (state) => {
    for (const command of state.pendingCommands) {
      const index = browserWindow.dataLayer?.indexOf(command) ?? -1;
      if (index >= 0) browserWindow.dataLayer.splice(index, 1);
    }
    state.pendingCommands = [];
    state.configured = false;
  };

  const cancelPendingLoad = (state) => {
    if (state.status !== 'loading') return;
    const script = state.script;
    state.status = 'idle';
    state.script = null;
    clearPendingInitialization(state);
    script?.remove?.();
  };

  const initialize = () => {
    if (!browserWindow || !document || !isAnalyticsProductionHost(browserWindow.location?.hostname)) return false;

    const state = browserWindow[ANALYTICS_STATE_KEY] ??= {
      configured: false,
      pendingCommands: [],
      script: null,
      status: 'idle',
    };
    if (state.status === 'loaded') {
      if (!state.configured) {
        ensureGtag();
        browserWindow.gtag('config', GA_MEASUREMENT_ID);
        state.configured = true;
      }
      return true;
    }
    if (state.status === 'loading') return true;

    ensureGtag();
    browserWindow.gtag('js', new Date());
    const jsCommand = browserWindow.dataLayer.at(-1);
    browserWindow.gtag('config', GA_MEASUREMENT_ID);
    const configCommand = browserWindow.dataLayer.at(-1);
    state.configured = true;
    state.pendingCommands = [jsCommand, configCommand];
    state.status = 'loading';

    document.querySelector?.(`#${GA_SCRIPT_ID}`)?.remove?.();
    const script = document.createElement?.('script');
    if (!script || !document.head?.append) {
      cancelPendingLoad(state);
      return false;
    }

    state.script = script;
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    script.onload = () => {
      if (state.status === 'loaded') return;
      if (state.status === 'loading' && state.script !== script) cancelPendingLoad(state);
      const wasCurrentRequest = state.status === 'loading' && state.script === script;
      state.status = 'loaded';
      state.script = script;
      state.pendingCommands = [];
      if (!wasCurrentRequest) {
        state.configured = false;
        if (currentConsent === 'granted') initialize();
      }
    };
    script.onerror = () => {
      if (state.status !== 'loading' || state.script !== script) return;
      cancelPendingLoad(state);
    };
    document.head.append(script);
    return true;
  };

  const enable = () => {
    browserWindow[GA_DISABLE_KEY] = false;
    ensureGtag();
    browserWindow.gtag('consent', 'update', { analytics_storage: 'granted' });
    initialize();
  };

  const accept = () => {
    currentConsent = 'granted';
    saveConsent(storage, 'granted');
    hideBanner();
    if (!browserWindow || !isAnalyticsProductionHost(browserWindow.location?.hostname)) return;
    enable();
  };

  const decline = () => {
    currentConsent = 'denied';
    saveConsent(storage, 'denied');
    hideBanner();
    if (!browserWindow || !isAnalyticsProductionHost(browserWindow.location?.hostname)) return;
    browserWindow[GA_DISABLE_KEY] = true;
    const state = browserWindow[ANALYTICS_STATE_KEY];
    if (state?.status === 'loading') cancelPendingLoad(state);
    browserWindow.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    if (state?.status === 'loaded') document?.querySelector?.(`#${GA_SCRIPT_ID}`)?.remove?.();
    expireAnalyticsCookies(browserWindow, document);
  };

  const manage = () => {
    if (!isAnalyticsProductionHost(browserWindow?.location?.hostname)) return;
    currentConsent = readConsent(storage) || currentConsent;
    showBanner({ focus: true });
  };

  const attachListeners = () => {
    if (listenersAttached) return;
    acceptButton?.addEventListener?.('click', accept);
    declineButton?.addEventListener?.('click', decline);
    manageButton?.addEventListener?.('click', manage);
    listenersAttached = true;
  };

  const start = () => {
    hideBanner();
    attachListeners();
    if (!isAnalyticsProductionHost(browserWindow?.location?.hostname)) return;

    currentConsent = readConsent(storage);
    if (currentConsent === 'granted') {
      enable();
      return;
    }
    if (currentConsent === 'denied') {
      decline();
      return;
    }
    showBanner();
  };

  return { accept, decline, initialize, manage, start };
};

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  initializeNavigation(document);
  initializeContactStatus(window, document);
  initializeContactValidation(document);
  let storage;
  try {
    storage = window.localStorage;
  } catch {
    storage = undefined;
  }
  createAnalyticsController({ window, document, storage }).start();
}
