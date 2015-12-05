var file = 'data.txt';
chrome.browserAction.onClicked.addListener(function(tab){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL(file), true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
      window.alert(xhr.responseText);
    }
  };
  xhr.send();
});
