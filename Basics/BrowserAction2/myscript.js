function changeColor(color) {
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='"+color+"'"
  });
}
document.getElementById('red').onclick = function() {
  changeColor('red');
}
document.getElementById('yellow').onclick = function() {
  changeColor('yellow');
}
