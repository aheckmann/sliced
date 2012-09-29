#sliced
==========

A faster alternative to `[].slice.call(arguments)`.

[![Build Status](https://secure.travis-ci.org/aheckmann/sliced.png)](http://travis-ci.org/aheckmann/sliced)

Example output from [benchmark.js](https://github.com/bestiejs/benchmark.js)

    Array.prototype.slice.call x 1,289,592 ops/sec ±2.88% (87 runs sampled)
    [].slice.call x 1,345,451 ops/sec ±1.68% (97 runs sampled)
    cached slice.call x 10,719,886 ops/sec ±1.04% (99 runs sampled)
    sliced x 15,809,545 ops/sec ±1.46% (93 runs sampled)
    fastest is sliced

_Benchmark  [source](https://github.com/aheckmann/sliced/blob/master/bench.js)._

##Usage

`sliced` accepts the same arguments as `Array#slice` so you can easily swap it out.

```js
function zing () {
  var slow = [].slice.call(arguments, 1, 8);
  var args = slice(arguments, 1, 8);

  var slow = Array.prototype.slice.call(arguments);
  var args = slice(arguments);
  // etc
}
```

## install

    npm install sliced


[LICENSE](https://github.com/aheckmann/sliced/blob/master/LICENSE)
