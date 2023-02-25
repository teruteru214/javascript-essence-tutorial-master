function hello (name) {
  console.log('hello' + name);
}

function bye() {
  console.log('bye');
}

function fn(cb) {
  cb('Tom');
}

fn(hello); //関数を引数として渡すことも可能。
fn(bye); //byeがコールバック関数になる。
fn(function(name) {
  console.log('hello' + name);
})

setTimeout(hello, 2000);
