  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      return { redirectUrl: "https://web.pslib.cz" };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );

  