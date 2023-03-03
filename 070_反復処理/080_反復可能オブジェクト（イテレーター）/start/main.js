const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
// 本来はObjectはこうしない。
Object.prototype[Symbol.iterator] = function() {
	const keys = Object.keys(this);
	console.log(keys)
	let i = 0;
	let _this = this; //こうすることによってnext内の＿thisの参照先を変える。
	return {
		next() {
			let key = keys[i++];
			return {
				value: [key, _this[key]],
				done: i > keys.length //これは要素より大きくなったらtrueになる。
			}
		}
	}
}
// const items = Object.entries(obj);
for (let [k, v] of items) {
	console.log(k, v);
}
