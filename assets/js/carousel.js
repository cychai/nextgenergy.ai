export const nextIndex = (current, delta, length) => {
  if (length <= 0) return 0;
  return ((current + delta) % length + length) % length;
};

export const initCarousel = (root, environment = {}) => {
  const slides = root ? [...root.querySelectorAll('[data-slide]')] : [];
  if (!root || slides.length === 0) return { destroy() {} };

  const previous = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const toggle = root.querySelector('[data-toggle]');
  const status = root.querySelector('[data-status]');
  const pageDocument = environment.document;
  const mediaQuery =
    typeof environment.matchMedia === 'function'
      ? environment.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
  const listeners = [];
  let active = 0;
  let hovered = false;
  let pointerActivatingToggle = false;
  let reducedMotion = mediaQuery?.matches ?? false;
  let skippedToggleFocusPause = false;
  let timer = null;
  let toggleFocused = false;
  let userPaused = false;

  const listen = (target, type, listener) => {
    if (!target?.addEventListener) return;
    target.addEventListener(type, listener);
    listeners.push(() => target.removeEventListener(type, listener));
  };

  const show = (index, announce = false) => {
    active = nextIndex(index, 0, slides.length);
    slides.forEach((slide, i) => {
      slide.hidden = i !== active;
    });
    if (announce && status) {
      status.textContent = `Showing service ${active + 1} of ${slides.length}`;
    }
  };

  const move = (delta, announce = false) => {
    show(nextIndex(active, delta, slides.length), announce);
  };

  const stopRotation = () => {
    if (timer === null) return;
    environment.clearInterval?.(timer);
    timer = null;
  };

  const canRotate = () =>
    !userPaused &&
    !reducedMotion &&
    !hovered &&
    slides.length > 1 &&
    !pageDocument?.hidden;

  const startRotation = () => {
    if (timer !== null || !canRotate() || !environment.setInterval) return;
    timer = environment.setInterval(() => move(1), 5000);
  };

  const updateToggle = () => {
    if (!toggle) return;
    const action = `${userPaused ? 'Play' : 'Pause'} automatic slide rotation`;
    toggle.textContent = action;
    toggle.setAttribute('aria-label', action);
  };

  const cancelPointerActivation = () => {
    if (!pointerActivatingToggle) return;
    const preserveFocusPause = skippedToggleFocusPause && toggleFocused;
    pointerActivatingToggle = false;
    skippedToggleFocusPause = false;
    if (!preserveFocusPause) return;
    userPaused = true;
    updateToggle();
    stopRotation();
  };

  listen(previous, 'click', () => move(-1, true));
  listen(next, 'click', () => move(1, true));
  listen(toggle, 'pointerdown', () => {
    pointerActivatingToggle = true;
    skippedToggleFocusPause = false;
  });
  listen(toggle, 'pointercancel', cancelPointerActivation);
  listen(toggle, 'pointerleave', cancelPointerActivation);
  listen(toggle, 'click', () => {
    userPaused = !userPaused;
    pointerActivatingToggle = false;
    skippedToggleFocusPause = false;
    updateToggle();
    if (userPaused) stopRotation();
    else startRotation();
  });
  listen(root, 'keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1, true);
  });
  listen(root, 'pointerenter', () => {
    hovered = true;
    stopRotation();
  });
  listen(root, 'pointerleave', () => {
    hovered = false;
    startRotation();
  });
  listen(root, 'focusin', (event) => {
    toggleFocused = event.target === toggle;
    if (pointerActivatingToggle && event.target === toggle) {
      skippedToggleFocusPause = true;
      stopRotation();
      return;
    }
    userPaused = true;
    updateToggle();
    stopRotation();
  });
  listen(root, 'focusout', (event) => {
    if (event.target === toggle) toggleFocused = false;
  });
  listen(pageDocument, 'visibilitychange', () => {
    if (pageDocument.hidden) stopRotation();
    else startRotation();
  });

  const handleMotionChange = (event) => {
    reducedMotion = event.matches;
    if (reducedMotion) stopRotation();
    else startRotation();
  };
  if (mediaQuery?.addEventListener) {
    listen(mediaQuery, 'change', handleMotionChange);
  } else if (mediaQuery?.addListener) {
    mediaQuery.addListener(handleMotionChange);
    listeners.push(() => mediaQuery.removeListener?.(handleMotionChange));
  }

  show(0);
  updateToggle();
  startRotation();

  return {
    destroy() {
      stopRotation();
      listeners.splice(0).forEach((remove) => remove());
    },
  };
};

if (typeof document !== 'undefined') {
  const root = document.querySelector('#services');
  if (root) initCarousel(root, typeof window === 'undefined' ? {} : window);
}
