# ChromeExtensions

--------------------------------------------------------------------------------

## BrowserAction1

- ��ɃA�C�R����\�� (browser_action)
- �A�C�R�����N���b�N����ƃ|�b�v�A�b�v�\��
- �|�b�v�A�b�v���烊���N��I������ƐV�����^�u�Ƀy�[�W�\��

### �t�@�C��

- Manifest.json
- popup.html
- icon19.png (19x19)

#### Manifest.json

```json:Manifest.json
{
  "browser_action": {
    "default_icon": "icon19.png",
    "default_title": "",
    "default_popup": "popup.html"
  },
}
```

#### popup.html

```html:popup.html
<ul>
  <li><a href="http://www.google.co.jp/" target="_blank">Google</a></li>
  <li><a href="http://www.yahoo.co.jp/" target="_blank">Yahoo!</a></li>
</ul>
```

### �֘A�����N

- [https://developer.chrome.com/extensions/manifest](https://developer.chrome.com/extensions/manifest)

--------------------------------------------------------------------------------

## BrowserAction2

- ��ɃA�C�R����\�� (browser_action)
- �A�C�R�����N���b�N����ƃ|�b�v�A�b�v�\��
- �|�b�v�A�b�v���烊���N��I������Ɣw�i�F��ύX (chrome.tabs.executeScript)

### �t�@�C��

- Manifest.json
- myscript.js
- popup.html
- icon19.png (19x19)

#### Manifest.json

```json:Manifest.json
  "permissions": [
    "tabs", "http://*/*", "https://*/*"
  ],
  "browser_action": {
    "default_icon": "icon19.png",
    "default_title": "",
    "default_popup": "popup.html"
  },
```

#### popup.html

```html:popup.html
<ul>
  <li id="red">Red</li>
  <li id="yellow">Yellow</li>
</ul>
```

#### myscript.js

```javascript:myscript.js
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
```

### �֘A�����N

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## BrowserAction3

- ��ɃA�C�R����\�� (browser_action + background)
- �A�C�R�����N���b�N����Ɣw�i�F��ύX (chrome.tabs.executeScript)

### �t�@�C��

- Manifest.json
- background.js
- icon19.png (19x19)

### Manifest.json

```json:Manifest.json
  "permissions": [
    "tabs", "http://*/*", "https://*/*"
  ],
  "background": {
    "scripts": [ "background.js" ]
  },
  "browser_action": {
    "default_title": "BrowserAction3",
    "default_icon": "icon19.png"
  },
```

#### background.js

```javascript:background.js
// https://developer.chrome.com/extensions/browserAction#event-onClicked
chrome.browserAction.onClicked.addListener(function() {
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='green'"
  })
});
```

### �֘A�����N

- [https://developer.chrome.com/extensions/browserAction#event-onClicked](https://developer.chrome.com/extensions/browserAction#event-onClicked)

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## OptionsPage1

-- �I�v�V�����ݒ� options_page localStorage

### �t�@�C��

- Manifest.json
- options.html
- options.js
- background.js
- icon19.png 19x19

#### Manifest.json

```Manifest.json
  "permissions": [
    "tabs", "http://*/*", "https://*/*"
  ],
  "background": {
    "scripts": [ "background.js" ]
  },
  "options_page": "options.html",
  "browser_action": {
    "default_icon": "icon19.png",
    "default_title": "OptionsPage1"
  },
```

#### options.html

```html:options.html
  <input type="radio" name="colors" value="1">Red
  <input type="radio" name="colors" value="2">Orange
  <input type="radio" name="colors" value="3">Yellow
  <button id="save">Save</button>
  <script src="options.js"></script>
```

#### options.js

```javascript:options.js
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
```

#### background.js

```javascript:background.js
// https://developer.chrome.com/extensions/browserAction#event-onClicked
chrome.browserAction.onClicked.addListener(function() {
  var color = localStorage['color'] ? localStorage['color'] : 'red';
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='"+color+"'"
  });
});
```

### �֘A�����N

- [https://developer.chrome.com/extensions/browserAction#event-onClicked](https://developer.chrome.com/extensions/browserAction#event-onClicked)

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## PageAction1

- ����̃y�[�W�ɂ����A�C�R���\�� (page_action)
- �A�C�R�����N���b�N����Ɣw�i�F��ύX (chrome.tabs.executeScript)

### �t�@�C��

- Manifest.json
- background.js
- icon19.png (19x19)

#### Manifest.json

```json:Manifest.json
"permissions": [
  "tabs", "http://*/*", "https://*/*", "contextMenus"
],
"background": {
  "scripts": [ "background.js" ],
  "persistent": false
},
"page_action": {
  "default_title": "PageAction1",
  "default_icon": "icon19.png"
},
```

#### background.js

```javascript:background.js
// https://developer.chrome.com/extensions/tabs#event-onUpdated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (tab.url.indexOf('google') != -1) {
    // https://developer.chrome.com/extensions/pageAction#method-show
    chrome.pageAction.show(tabId);
  }
});

// https://developer.chrome.com/extensions/pageAction#event-onClicked
chrome.pageAction.onClicked.addListener(function() {
  // https://developer.chrome.com/extensions/tabs#method-executeScript
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='red'"
  })
});
```

### �֘A�����N

- [https://developer.chrome.com/extensions/tabs#event-onUpdated](https://developer.chrome.com/extensions/tabs#event-onUpdated)

- [https://developer.chrome.com/extensions/pageAction#method-show](https://developer.chrome.com/extensions/pageAction#method-show)

- [https://developer.chrome.com/extensions/pageAction#event-onClicked](https://developer.chrome.com/extensions/pageAction#event-onClicked)

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## ContentScripts1

- ����̏����ɂ����X�N���v�g���s (content_scripts)

### �t�@�C��

- Manifest.json
- myscript.js

#### Manifest.json

```json:Manifest.json
"permissions": [
  "tabs", "http://*/*", "https://*/*"
],
"content_scripts": [{
  "matches": [ "https://www.google.com/* "],
  "js": [ "myscript.js" ]
}],
```

#### myscript.js

```javascript:myscript.js
alert('Google page.');
```

### �֘A�����N

- [https://developer.chrome.com/extensions/content_scripts](https://developer.chrome.com/extensions/content_scripts)

--------------------------------------------------------------------------------

## ContextMenu1

- �e�L�X�g�I�𒆂̉E�N���b�N���Ƀ��j���[�\���ichrome.contextMenus�j
- ���j���[��I������Ɣw�i�F��ύX (chrome.tabs.executeScript)

### �t�@�C��

- Manifest.json
- myscript.js
- icon16.png (16x16)

#### Manifest.json

```json:Manifest.json
"permissions": [
  "tabs", "http://*/*", "contextMenus"
],
"icons": {
  "16": "icon16.png"
},
"background": {
  "scripts": [ "background.js" ],
  "persistent": true
},
```

#### background.js

```javascript:background.js
// https://developer.chrome.com/extensions/contextMenus#method-create
chrome.contextMenus.create({
  "title": "�u%s�v��������",
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
```

### �֘A�����N

- [https://developer.chrome.com/extensions/contextMenus#method-create](https://developer.chrome.com/extensions/contextMenus#method-create)

- [https://developer.chrome.com/extensions/tabs#method-create](https://developer.chrome.com/extensions/tabs#method-create)

--------------------------------------------------------------------------------

