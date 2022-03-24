# dsbridge_flutter

## 简介
此插件为网页端插件，配合flutter端[DsBridge](https://github.com/woyehaizaixiang/DsBridge)一起使用

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
