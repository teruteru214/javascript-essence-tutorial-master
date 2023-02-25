function a() {
  console.log('called');
}

a();

let c = (function() {

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called')
  }
  function publicFn() {
    console.log('publicFn is called' + privateVal++)
  }
  console.log('called');
  return {
    publicVal,
    publicFn
  };
})()

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
c.private.Fn();

console.log(c.publicVal);

let b = function() {
  console.log('called');
}();
