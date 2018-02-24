# Ajax原生方法封装

运行示例
```javascript
sendAjax({
  url: 'url',
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
```