// DsBridge
function DsBridge () {
  let variableNum = 0
  window.dsBridgeEventObj = {}
  this.call = function (method, data, callBack) {
    variableNum++
    window.dsBridgeEventObj[`callBack${variableNum}`] = callBack
    const postData = JSON.stringify({
      method,
      data: JSON.stringify(data),
      callBack: `window.dsBridgeEventObj.callBack${variableNum}`
    })
    try {
      DsBridgeApp.postMessage(postData)
    } catch (_) {

    }
  }
  // add alert
  let alertNative = window.alert
  window.alert = function (e) {
    alertNative(e)
    try {
      Alert.postMessage(e)
    } catch (_) {

    }
  }
}

function init () {
  window.dsBridge = new DsBridge()
}

init()
