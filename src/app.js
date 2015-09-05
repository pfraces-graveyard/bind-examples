define.root(function (require) {
  'use strict';

  var model = require('model'),
      bind  = require('bind');

  var dom   = require('domo').use({
    html    : require('domo.html')
  });

  dom('body').html(bind('weapons-template', model({
    name: '',
    value: 0,
    damage: 0
  })));
});
