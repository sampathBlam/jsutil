const _ = require('../dist/bundle');

console.log(_.pick({ a:1, b:2 }, ['a', 'c']));

console.log(_.reverse([1,2,3]));
