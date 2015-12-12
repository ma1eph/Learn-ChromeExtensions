{
  var e = document.createElement('textarea');
  e.id = 'clip';
  document.body.appendChild(e);
}

function copyToClip(s) {
  var e = document.getElementById('clip');
  e.value = s;
  e.select();
  document.execCommand("copy");
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  copyToClip(request.txt);
});
