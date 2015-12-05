// https://developer.chrome.com/extensions/browserAction#event-onClicked
chrome.browserAction.onClicked.addListener(function() {
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='green'"
  })
});
