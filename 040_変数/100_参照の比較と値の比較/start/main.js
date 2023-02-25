const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a == b);
console.log(a.prop === b.prop);
//　これだとプロパティの値を参照しているからtrue

const c = a;
console.log( a === c );

//これだと参照先一緒なのでtrue
