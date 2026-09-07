(function () {
  "use strict";

  var measurementId = "G-SQ8WX1BMRW";
  var storageKey = "nextgenergy-analytics-consent";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  var savedChoice = null;
  try {
    savedChoice = window.localStorage.getItem(storageKey);
  } catch (_) {
    // Consent still works for this page when storage is unavailable.
  }

  window.gtag("consent", "default", {
    analytics_storage: savedChoice === "granted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true
  });

  function storeChoice(choice) {
    try {
      window.localStorage.setItem(storageKey, choice);
    } catch (_) {
      // Keep the choice for this page even if storage is unavailable.
    }
  }

  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach(function (cookie) {
      var name = cookie.split("=")[0].trim();
      if (!name.startsWith("_ga")) return;

      document.cookie = name + "=; Max-Age=0; Path=/; SameSite=Lax";
      document.cookie =
        name +
        "=; Max-Age=0; Path=/; Domain=." +
        window.location.hostname +
        "; SameSite=Lax";
    });
  }

  function buildConsentControls() {
    var notice = document.createElement("aside");
    notice.className = "analytics-consent";
    notice.setAttribute("aria-label", "Analytics privacy notice");
    notice.setAttribute("role", "dialog");
    notice.innerHTML =
      '<p>May we use Google Analytics to understand site usage? Advertising features stay disabled.</p>' +
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
      window.gtag("consent", "update", {
        analytics_storage: choice
      });
      if (choice === "denied") clearAnalyticsCookies();
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
