// Fallback for a static site: hide trade-show entries once their date has passed,
// even if nobody has rebuilt the site since. The build-time check in src/data/site.ts
// removes them from the HTML on the first build after the show.
(function () {
  var now = Date.now();
  document.querySelectorAll('[data-hide-from]').forEach(function (el) {
    var t = Date.parse(el.getAttribute('data-hide-from'));
    if (!isNaN(t) && now >= t) {
      if (el.tagName === 'OPTION' && el.selected) { el.parentNode.selectedIndex = 0; }
      el.remove();
    }
  });
})();
