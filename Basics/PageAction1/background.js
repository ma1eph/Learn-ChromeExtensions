// https://developer.chrome.com/extensions/tabs#event-onUpdated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf('google') != -1) {
    // https://developer.chrome.com/extensions/pageAction#method-show
    chrome.pageAction.show(tabId);
  }
});

// https://developer.chrome.com/extensions/pageAction#event-onClicked
chrome.pageAction.onClicked.addListener(function() {
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='red'"
  })
});
