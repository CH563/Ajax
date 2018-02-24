// 使用promise
function getURL(URL) {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', URL, true);
		req.onload = function () {
			if (req.status === 200) {
				resolve(req.responseText);
			} else {
				reject(new Error(req.statusText));
			}
		};
		req.onerror = function () {
			reject(new Error(req.statusText));
		};
		req.send();
	});
}
// 运行示例
var URL = "https://www.easy-mock.com/mock/5a7122c914298b5123dda17a/egold/fund/fundRecords";
getURL(URL).then(function onFulfilled(value) {
	console.log(value);
}).catch(function onRejected(error) {
	console.error(error);
});