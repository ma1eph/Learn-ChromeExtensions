var colors = document.getElementsByName('colors');

document.getElementById('save').onclick = function() {
  if (colors[0].checked) {
    localStorage['color'] = 'red';
  } else if (colors[1].checked) {
    localStorage['color'] = 'orange';
  } else if (colors[2].checked) {
    localStorage['color'] = 'yellow';
  }
}

document.body.onload = function() {
  switch (localStorage['color']) {
    case 'red':
      colors[0].checked = true;
      break;
    case 'orange':
      colors[1].checked = true;
      break;
    case 'yellow':
      colors[2].checked = true;
      break;
    default:
      colors[0].checked = true;
      break;
  }
}
