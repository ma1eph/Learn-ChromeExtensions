# ChromeExtensions

--------------------------------------------------------------------------------

## BrowserAction1

- 常にアイコンを表示 (browser_action)
- アイコンをクリックするとポップアップ表示
- ポップアップからリンクを選択すると新しいタブにページ表示

### ファイル

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

### 関連リンク

- [https://developer.chrome.com/extensions/manifest](https://developer.chrome.com/extensions/manifest)

--------------------------------------------------------------------------------

## BrowserAction2

- 常にアイコンを表示 (browser_action)
- アイコンをクリックするとポップアップ表示
- ポップアップからリンクを選択すると背景色を変更 (chrome.tabs.executeScript)

### ファイル

- Manifest.json
- background.js
- popup.html
- icon19.png 19x19

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
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
</head>
<body style="min-width: 200px;">
<ul>
  <li id="red">Red</li>
  <li id="yellow">Yellow</li>
</ul>
<script src="myscript.js"></script>
</body>
</html>
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

### 関連リンク

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## BrowserAction3

- 常にアイコンを表示 (browser_action + background)
- アイコンをクリックすると背景色を変更 (chrome.tabs.executeScript)

### ファイル

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

### 関連リンク

- [https://developer.chrome.com/extensions/content_scripts](https://developer.chrome.com/extensions/content_scripts)

- [https://developer.chrome.com/extensions/browserAction#event-onClicked](https://developer.chrome.com/extensions/browserAction#event-onClicked)

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## PageAction1

- 特定のページにだけアイコン表示 (page_action)
- アイコンをクリックすると背景色を変更 (chrome.tabs.executeScript)

### ファイル

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

### 関連リンク

- [https://developer.chrome.com/extensions/tabs#event-onUpdated](https://developer.chrome.com/extensions/tabs#event-onUpdated)

- [https://developer.chrome.com/extensions/pageAction#method-show](https://developer.chrome.com/extensions/pageAction#method-show)

- [https://developer.chrome.com/extensions/pageAction#event-onClicked](https://developer.chrome.com/extensions/pageAction#event-onClicked)

- [https://developer.chrome.com/extensions/tabs#method-executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript)

--------------------------------------------------------------------------------

## ContentScripts1

- 特定の条件にだけスクリプト実行 (content_scripts)

### ファイル

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

### 関連リンク

- [https://developer.chrome.com/extensions/content_scripts](https://developer.chrome.com/extensions/content_scripts)

--------------------------------------------------------------------------------

## ContextMenu1

- テキスト選択中の右クリック時にメニュー表示（chrome.contextMenus）
- メニューを選択すると背景色を変更 (chrome.tabs.executeScript)

### ファイル

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
```

### 関連リンク

- [https://developer.chrome.com/extensions/contextMenus#method-create](https://developer.chrome.com/extensions/contextMenus#method-create)

- [https://developer.chrome.com/extensions/tabs#method-create](https://developer.chrome.com/extensions/tabs#method-create)

--------------------------------------------------------------------------------

