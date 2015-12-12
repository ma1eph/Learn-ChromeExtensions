window.addEventListener('keydown', keyevent, true);

function keyevent(event) {
  var isMac = (navigator.platform.indexOf("Mac") != -1);
  if ((!isMac && !event.ctrlKey) || (isMac && ! event.metaKey)) return;

  if (isSelected()) return;

  var txt = '';

  switch (event.keyCode) {
  case 67: //Ctrl+C
    txt = document.all[0].outerHTML;
    break;
  case 88: //Ctrl+X
    txt = document.title
    break;
  default:
    return;
  }

  chrome.runtime.sendMessage({
    txt: txt
  });
}

function isSelected() {
  return (window.getSelection().rangeCount > 1) ? true : false;
}
