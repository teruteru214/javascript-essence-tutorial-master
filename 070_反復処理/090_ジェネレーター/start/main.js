// function* gen() {
//   yield 1;
//   yield 2;
//   return 3; //イテレータの終了
// }

// const it = gen();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

function* genIterator(max = 10) {
  let i = 0;

  while(i < max) {
    yield i++;
  } //returnがなくても影響ない。
  return;
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

const obj = {
  [Symbol.iterator]: genIterator
}

for(const i of obj) {
  console.log(i)
}
// const it = genIterator();
// console.log(it.next())

function genIterator(max = 10) {
  let i = 0;

  return {
    next: function() {
      if(i >= max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}
