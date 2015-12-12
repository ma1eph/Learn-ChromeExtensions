window.addEventListener('keydown', keyevent, true);

function keyevent(event) {
  var isMac = (navigator.platform.indexOf("Mac") != -1);
  if ((!isMac && !event.ctrlKey) || (isMac && ! event.metaKey)) return;
  switch (event.keyCode) {
  case 89: //'Y'
    alert('Do your stuff');
    break;
  }
}

function isSelected() {
  return (window.getSelection().rangeCount > 1) ? true : false;
}
