(function () {
  function emit(eventName, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  }

  function getLinkDomain(url) {
    try {
      var parsed = new URL(url, window.location.href);
      var host = parsed.hostname.toLowerCase();
      if (host === "github.com" || host.endsWith(".github.com")) {
        return "github.com";
      }
      if (host === "npmjs.com" || host.endsWith(".npmjs.com")) {
        return "npmjs.com";
      }
    } catch (error) {
      return null;
    }

    return null;
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("a, button, [data-analytics]");
    if (!target) {
      return;
    }

    var pagePath = window.location.pathname;

    if (target.tagName === "A") {
      var href = target.getAttribute("href") || "";
      var linkDomain = getLinkDomain(href);
      if (linkDomain) {
        emit("outbound_click", {
          link_domain: linkDomain,
          page_path: pagePath
        });
      }
    }

    var analyticsType = target.getAttribute("data-analytics");
    if (!analyticsType) {
      return;
    }

    var itemName = target.getAttribute("data-item") || target.textContent.trim() || "unknown";
    if (analyticsType === "download") {
      emit("download_click", {
        item_name: itemName,
        page_path: pagePath
      });
      return;
    }

    if (analyticsType === "example") {
      emit("example_click", {
        item_name: itemName,
        page_path: pagePath
      });
    }
  });
})();
