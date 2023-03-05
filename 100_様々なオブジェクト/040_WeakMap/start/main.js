const wm = new WeakMap();

const o = {};
wm.set(o, 'value1');

// o = null;
// o = {};
console.log(wm.delete(o));
console.log(wm.get(o));
