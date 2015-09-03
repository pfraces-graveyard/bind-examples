define.root(function (require) {
  'use strict';

  var model = require('model'),
      bind  = require('bind');

  var dom   = require('domo').use({
    append  : require('domo.append')
  });

  var weapon = model({
    name: '',
    value: 0,
    damage: 0
  });

  dom('body')
  .append(bind('weapons-template', weapon))
  .append(bind('weapons-template', weapon));
});
