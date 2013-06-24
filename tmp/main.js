(function() {
  $(function() {
    var clock, clockEl;

    require('./app_manager')($(document.body));
    clock = require('./clock');
    clockEl = $('#clock');
    return clock.render(clockEl);
  });

}).call(this);
