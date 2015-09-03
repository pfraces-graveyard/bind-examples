define.root(function (require) {
  'use strict';

  var model = require('model'),
      bind  = require('bind');

  var dom   = require('domo').use({
    append  : require('domo.append')
  });

  dom('body').append(bind('weapons-template', model({
    name: '',
    value: 0,
    damage: 0
  })));
});
