define('mu.is.defined', function () {
  'use strict';
  
  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };
  
  return isDefined;
});

define('mu.is.boolean', function () {
  'use strict';
  
  var isBoolean = function (arg) {
    return typeof arg === 'boolean';
  };
  
  return isBoolean;
});

define('mu.is.string', function () {
  'use strict';
  
  var isString = function (arg) {
    return typeof arg === 'string';
  };
  
  return isString;
});

define('mu.is.number', function () {
  'use strict';
  
  var isNumber = function (arg) {
    return typeof arg === 'number';
  };
  
  return isNumber;
});

define('mu.is.array', function (require) {
  'use strict';
  
  var isNumber = require('mu.is.number');
  
  var isArray = function (arg) {
    return typeof arg === 'object' && isNumber(arg.length);
  };
  
  return isArray;
});

define('mu.is.object', function () {
  'use strict';
  
  var isObject = function (arg) {
    return {}.toString.call(arg) === '[object Object]';
  };
  
  return isObject;
});

define('mu.is.function', function () {
  'use strict';
  
  var isFunction = function (arg) {
    return typeof arg === 'function';
  };
  
  return isFunction;
});

define('mu.is.scalar', function () {
  'use strict';

  var isScalar = function (arg) {
    var argType = typeof arg;

    return (
        argType === 'string' ||
        argType === 'number' ||
        argType === 'boolean'
    );
  };

  return isScalar;
});
