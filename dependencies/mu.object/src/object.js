define('mu.object.merge', function (require) {
  'use strict';

  var each   = require('mu.list.each'),
      reduce = require('mu.list.reduce');

  var mixin = function (a, b) {
    each(b, function (item, index) { a[index] = item; });
    return a;
  };

  var merge = function (/* objs... */) {
    return reduce(arguments, {}, mixin);
  };

  return merge;
});
