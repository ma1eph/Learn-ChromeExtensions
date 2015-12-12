var config = {};

{
  var file = 'config.json';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL(file), true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      config = JSON.parse(xhr.responseText);
    }
  };
  xhr.send();
}

chrome.browserAction.onClicked.addListener(function(tab){
  for (key in config) {
    if (typeof config[key] === 'string' && config[key] != '') {
      console.log(key + ': ' + config[key]);
    }
  }
});
