(function() {
  var addTicks, domEl, hourHand, minuteHand, oneHour, oneSecond, redraw, secondHand, start;

  domEl = null;

  secondHand = null;

  minuteHand = null;

  hourHand = null;

  oneSecond = 6;

  oneHour = 30;

  redraw = function(seconds, minutes, hours) {
    secondHand.css('transform', "rotate(" + (seconds * oneSecond) + "deg)");
    minuteHand.css('transform', "rotate(" + (minutes * oneSecond) + "deg)");
    return hourHand.css('transform', "rotate(" + (hours * oneHour) + "deg)");
  };

  start = function(seconds, minutes, hours) {
    var update;

    if (seconds == null) {
      seconds = 0;
    }
    if (minutes == null) {
      minutes = 0;
    }
    if (hours == null) {
      hours = 0;
    }
    update = function() {
      var now;

      setTimeout(update, 1000);
      now = new Date();
      return redraw(now.getSeconds(), now.getMinutes(), now.getHours());
    };
    return update();
  };

  addTicks = function() {
    var i, tick, tickDistance, _i, _j, _results;

    tickDistance = domEl.height() / 2;
    for (i = _i = 0; _i < 60; i = ++_i) {
      if (i % 5 === 0) {
        continue;
      }
      tick = $("<div class='tick minute'>");
      tick.css('transform', "rotate(" + (i * oneSecond) + "deg) translate3d(0, " + tickDistance + "px, 0)");
      domEl.append(tick);
    }
    _results = [];
    for (i = _j = 0; _j < 12; i = ++_j) {
      tick = $("<div class='tick hour'>");
      tick.css('transform', "rotate(" + (i * oneHour) + "deg) translate3d(0, " + tickDistance + "px, 0)");
      _results.push(domEl.append(tick));
    }
    return _results;
  };

  exports.render = function(theDomEl) {
    domEl = theDomEl;
    secondHand = $("<div class='second hand'>");
    minuteHand = $("<div class='minute hand'>");
    hourHand = $("<div class='hour hand'>");
    addTicks();
    domEl.append(hourHand);
    domEl.append(minuteHand);
    domEl.append(secondHand);
    domEl.append("<div class='screw'>");
    return start();
  };

}).call(this);
