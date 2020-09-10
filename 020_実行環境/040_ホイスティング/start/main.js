

const a = function() {
  let c = 1;
  console.log(c);

  d();
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
}

a();

const b = 0;

console.log(b);
