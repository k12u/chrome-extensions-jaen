chrome.action.onClicked.addListener((tab) => {
  let url = new URL(tab.url);
  let hl = url.searchParams.get("hl");

  if (hl === "en") {
    url.searchParams.set("hl", "ja");
  } else {
    url.searchParams.set("hl", "en");
  }
  chrome.tabs.update(tab.id, {url: url.toString()});
});
