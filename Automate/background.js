
// https://developer.chrome.com/extensions/tabs#event-onUpdated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf('ushizaa') != -1) {
    // https://developer.chrome.com/extensions/pageAction#method-show
    chrome.pageAction.show(tabId);
  }
});

// https://developer.chrome.com/extensions/pageAction#event-onClicked
chrome.pageAction.onClicked.addListener(function() {
  var file = 'settings.json';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL(file), true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText, function(key, value) {
        if (typeof value === 'string') {
          // https://developer.chrome.com/extensions/tabs#method-executeScript
          chrome.tabs.executeScript(null, {
            "code": "document.getElementById('"+key+"').value='"+value+"'"
          })
        }
        return value;
      });
    }
  };
  xhr.send();
});
