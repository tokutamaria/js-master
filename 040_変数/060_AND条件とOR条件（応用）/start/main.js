function hello(name) {
  if(!name) {
    // name =  name || 'Tom';
  }
  console.log('hello' + name);
}

hello('Bod');


let name;

name && hello(name);
