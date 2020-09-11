function a() {
  console.log('colled');
}

a();

let c = (function() {

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called');
  }

  return{
    publicVal,
    publicFn
  };
})()

c.publicFn();
console.log(c.publicVal)
c.privateFn();

// console.log(c);
