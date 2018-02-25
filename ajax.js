// 原生ajax写法
function sendAjax (opt) {
  var params = getParams(opt.data)
  var xhr
  // 传入方式默认为空
  opt = opt || {}
  // 默认为GET请求
  opt.type = (opt.type || 'GET').toUpperCase()
  // 返回值类型默认为json
  opt.dataType = opt.dataType || 'json'
  // 默认为异步请求
  opt.async = opt.async || true
  // 对需要传入参数处理
  if (XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xhr = new XMLHttpRequest()
  } else {
    // code for IE6, IE5
    xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
  }
  xhr.onreadystatechange = function () {
    /**
     * @readyState
     * 0: 请求未初始化
     * 1: 服务器连接已建立
     * 2: 请求已接收
     * 3: 请求处理中
     * 4: 请求已完成，且响应已就绪
     */
    if (xhr.readyState === 4) {
      // 响应成功返回200
      if (xhr.status >= 200 && xhr.status < 300) {
        opt.success && opt.success(xhr.responseText, xhr.responseXML)
      } else {
        opt.fail && opt.fail(xhr.statusText, xhr.status)
      }
    }
  }
  // GET和POST的不同处理
  if (opt.type === 'GET') {
    // GET请求，把参数拼在url上
    xhr.open('GET', opt.url + '?' + params, opt.async)
    // 发送请求时传null
    xhr.send(null)
  } else if (opt.type === 'POST') {
    xhr.open('POST', opt.url, opt.async)
    // 设置POST请求头
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // 发送请求参数
    xhr.send(params)
  } else {
    console.error('请定义请求类型为GET或POST')
  }
}
// 传参data处理
function getParams (data) {
  var arr = []
  for (var param in data) {
    arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]))
  }
  arr.push('v=' + new Date().getTime())
  return arr.join('&')
}

// 运行示例
sendAjax({
  url: 'https://www.easy-mock.com/mock/5a7122c914298b5123dda17a/egold/fund/fundRecords',
  type: 'GET',
  data: {
    name: 'name',
    age: '23'
  },
  dataType: 'json',
  async: false,
  success: function (res) {
    console.log(res)
  },
  fail: function (err, status) {
    console.log(err)
    console.log('状态码为：' + status)
  }
})
