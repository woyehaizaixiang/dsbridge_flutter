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
    DsBridgeApp.postMessage(postData)
  }
}

function init () {
  window.dsBridge = new DsBridge()
}

init()
