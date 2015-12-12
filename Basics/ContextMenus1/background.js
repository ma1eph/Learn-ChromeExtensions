// https://developer.chrome.com/extensions/contextMenus#method-create
chrome.contextMenus.create({
  "title": "「%s」をぐぐる",
  "type": "normal",
  "contexts": [ "selection" ],
  "onclick": function(info) {
    var url = 'https://www.google.co.jp/webhp?q=' + encodeURIComponent(info.selectionText);
    // https://developer.chrome.com/extensions/tabs#method-create
    chrome.tabs.create({
      url: url
    });
  }
});
