// Sends visitors to their language before the page renders.
// An explicit ΕΛ/EN choice (saved by main.js) always wins; otherwise only
// the Greek pages redirect, and only when nothing points to a Greek visitor.
(function () {
  var page = document.documentElement.lang;
  var wanted = null;
  try {
    wanted = localStorage.getItem("lang");
  } catch (e) {}

  if (!wanted && page === "el" && !/bot|crawl|spider|slurp|preview/i.test(navigator.userAgent)) {
    var langs = navigator.languages || [navigator.language || ""];
    var greekLang = langs.some(function (l) { return /^el\b/i.test(l); });
    var zone = "";
    try {
      zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch (e) {}
    var greekZone = zone === "Europe/Athens" || zone === "Asia/Nicosia";
    wanted = greekLang || greekZone ? "el" : "en";
  }

  if (!wanted || wanted === page) {
    return;
  }
  var file = location.pathname.split("/").pop() || "index.html";
  location.replace((wanted === "en" ? "en/" : "../") + file + location.search + location.hash);
})();
