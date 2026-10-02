(function () {
  "use strict";

  // Consent-first loading: no Google script and no request to Google until the
  // visitor clicks "Accept analytics". "Decline" (or no choice) sends nothing.
  var measurementId = "G-SQ8WX1BMRW";
  var storageKey = "nextgenergy-analytics-consent";
  var loaded = false;

  var savedChoice = null;
  try {
    savedChoice = window.localStorage.getItem(storageKey);
  } catch (_) {
    // No stored choice: treat as not yet chosen; nothing loads.
  }

  function storeChoice(choice) {
    try {
      window.localStorage.setItem(storageKey, choice);
    } catch (_) {
      // Keep the choice for this page even if storage is unavailable.
    }
  }

  function clearAnalyticsCookies() {
    var host = window.location.hostname;
    var domains = ["", host, "." + host];
    var parts = host.split(".");
    if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
    document.cookie.split(";").forEach(function (cookie) {
      var name = cookie.split("=")[0].trim();
      if (!/^_ga|^_gid$|^_gat/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie =
          name + "=; Max-Age=0; Path=/;" + (d ? " Domain=" + d + ";" : "") + " SameSite=Lax";
      });
    });
  }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window["ga-disable-" + measurementId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
    document.head.appendChild(s);
  }

  function stopAnalytics() {
    // Withdrawal on a page where the tag already loaded: stop further hits now.
    window["ga-disable-" + measurementId] = true;
    if (loaded && window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    clearAnalyticsCookies();
  }

  if (savedChoice === "granted") {
    loadAnalytics();
  } else {
    // Not chosen or declined: make sure no leftover analytics cookies remain.
    clearAnalyticsCookies();
  }

  function buildConsentControls() {
    var notice = document.createElement("aside");
    notice.className = "analytics-consent";
    notice.setAttribute("aria-label", "Analytics privacy notice");
    notice.setAttribute("role", "dialog");
    notice.innerHTML =
      '<p>May we use Google Analytics to understand site usage? Nothing from Google loads unless you accept. If you decline, nothing is sent to Google. Advertising features stay disabled; <a href="/company/privacy">details</a>.</p>' +
      '<div class="analytics-consent__actions">' +
      '<button type="button" data-analytics-choice="granted">Accept analytics</button>' +
      '<button type="button" data-analytics-choice="denied">Decline</button>' +
      '<a href="/company/privacy">Privacy notice</a>' +
      "</div>";

    var manage = document.createElement("button");
    manage.className = "analytics-manage";
    manage.type = "button";
    manage.textContent = "Analytics choices";

    function showNotice() {
      notice.hidden = false;
      notice.querySelector("button").focus();
    }

    notice.addEventListener("click", function (event) {
      var button = event.target.closest("[data-analytics-choice]");
      if (!button) return;

      var choice = button.getAttribute("data-analytics-choice");
      storeChoice(choice);
      if (choice === "granted") loadAnalytics();
      else stopAnalytics();
      notice.hidden = true;
    });

    manage.addEventListener("click", showNotice);
    document.body.appendChild(notice);

    var legal = document.querySelector(".legal span:last-child");
    if (legal) {
      legal.append(" · ", manage);
    } else {
      document.body.appendChild(manage);
    }

    if (savedChoice) {
      notice.hidden = true;
    } else {
      showNotice();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildConsentControls);
  } else {
    buildConsentControls();
  }
})();
