# dsbridge_flutter

## 简介
在网页中使用dsBridge和flutter进行交互,[flutter_webview_plugin](https://pub.dev/packages/flutter_webview_plugin)
此插件为网页端插件，配合flutter端[JsBridgeUtil](https://github.com/woyehaizaixiang/JsBridgeUtil)一起使用

## 安装
```
npm install dsbridge_flutter
```

## 使用
```
import 'dsbridge_flutter'

dsBridge.call(<String> method, <Object> data, <Function> callback)
```

## 例子
```
import 'dsbridge_flutter'
dsBridge.call('share', { name: 'woyehaizaixiang' }, function (res) {
  alert(res)
})
```
