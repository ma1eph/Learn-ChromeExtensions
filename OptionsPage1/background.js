// https://developer.chrome.com/extensions/browserAction#event-onClicked
chrome.browserAction.onClicked.addListener(function() {
  var color = localStorage['color'] ? localStorage['color'] : 'red';
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='"+color+"'"
  });
});
