a();

function a() {
  let c = 1;
  console.log(c);

  d();
  function d() {
    console.log('hello')
  }
  console.log('hello')
}

const b = 0;
console.log(b);
