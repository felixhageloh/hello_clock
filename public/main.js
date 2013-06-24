;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function() {
  var checkInstalled, domEl, installApp, manifestUrl, renderInstaller, showInstaller;

  manifestUrl = 'http://' + window.location.hostname + '/hello_clock.webapp';

  domEl = null;

  installApp = function() {
    var request;

    request = navigator.mozApps.install(manifestUrl);
    request.onsuccess = function() {
      return alert('Hello Clock has been installed');
    };
    return request.onerror = function() {
      return alert(this.error.name);
    };
  };

  renderInstaller = function(installerEl) {
    var installButton;

    installButton = $("<button>Add to home screen</button>");
    installButton.on('click', installApp);
    return installerEl.html(installButton);
  };

  showInstaller = function() {
    domEl.removeClass('installed');
    return renderInstaller(domEl.find('#installer'));
  };

  checkInstalled = function() {
    var request;

    request = window.navigator.mozApps.checkInstalled(manifestUrl);
    return request.onsuccess = function() {
      if (!request.result) {
        return showInstaller();
      }
    };
  };

  module.exports = function(appDomEl) {
    domEl = appDomEl;
    domEl.addClass('installed');
    if (navigator.mozApps != null) {
      return checkInstalled();
    }
  };

}).call(this);

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
(function() {
  $(function() {
    var clock, clockEl;

    require('./app_manager')($(document.body));
    clock = require('./clock');
    clockEl = $('#clock');
    return clock.render(clockEl);
  });

}).call(this);

},{"./app_manager":1,"./clock":2}]},{},[1,2,3])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZmVsaXgvV29ya3NwYWNlL2ZpcmVmb3hPUy90bXAvYXBwX21hbmFnZXIuanMiLCIvVXNlcnMvZmVsaXgvV29ya3NwYWNlL2ZpcmVmb3hPUy90bXAvY2xvY2suanMiLCIvVXNlcnMvZmVsaXgvV29ya3NwYWNlL2ZpcmVmb3hPUy90bXAvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgdmFyIGNoZWNrSW5zdGFsbGVkLCBkb21FbCwgaW5zdGFsbEFwcCwgbWFuaWZlc3RVcmwsIHJlbmRlckluc3RhbGxlciwgc2hvd0luc3RhbGxlcjtcblxuICBtYW5pZmVzdFVybCA9ICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICcvaGVsbG9fY2xvY2sud2ViYXBwJztcblxuICBkb21FbCA9IG51bGw7XG5cbiAgaW5zdGFsbEFwcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXF1ZXN0O1xuXG4gICAgcmVxdWVzdCA9IG5hdmlnYXRvci5tb3pBcHBzLmluc3RhbGwobWFuaWZlc3RVcmwpO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ0hlbGxvIENsb2NrIGhhcyBiZWVuIGluc3RhbGxlZCcpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KHRoaXMuZXJyb3IubmFtZSk7XG4gICAgfTtcbiAgfTtcblxuICByZW5kZXJJbnN0YWxsZXIgPSBmdW5jdGlvbihpbnN0YWxsZXJFbCkge1xuICAgIHZhciBpbnN0YWxsQnV0dG9uO1xuXG4gICAgaW5zdGFsbEJ1dHRvbiA9ICQoXCI8YnV0dG9uPkFkZCB0byBob21lIHNjcmVlbjwvYnV0dG9uPlwiKTtcbiAgICBpbnN0YWxsQnV0dG9uLm9uKCdjbGljaycsIGluc3RhbGxBcHApO1xuICAgIHJldHVybiBpbnN0YWxsZXJFbC5odG1sKGluc3RhbGxCdXR0b24pO1xuICB9O1xuXG4gIHNob3dJbnN0YWxsZXIgPSBmdW5jdGlvbigpIHtcbiAgICBkb21FbC5yZW1vdmVDbGFzcygnaW5zdGFsbGVkJyk7XG4gICAgcmV0dXJuIHJlbmRlckluc3RhbGxlcihkb21FbC5maW5kKCcjaW5zdGFsbGVyJykpO1xuICB9O1xuXG4gIGNoZWNrSW5zdGFsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlcXVlc3Q7XG5cbiAgICByZXF1ZXN0ID0gd2luZG93Lm5hdmlnYXRvci5tb3pBcHBzLmNoZWNrSW5zdGFsbGVkKG1hbmlmZXN0VXJsKTtcbiAgICByZXR1cm4gcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghcmVxdWVzdC5yZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHNob3dJbnN0YWxsZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwRG9tRWwpIHtcbiAgICBkb21FbCA9IGFwcERvbUVsO1xuICAgIGRvbUVsLmFkZENsYXNzKCdpbnN0YWxsZWQnKTtcbiAgICBpZiAobmF2aWdhdG9yLm1vekFwcHMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNoZWNrSW5zdGFsbGVkKCk7XG4gICAgfVxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYWRkVGlja3MsIGRvbUVsLCBob3VySGFuZCwgbWludXRlSGFuZCwgb25lSG91ciwgb25lU2Vjb25kLCByZWRyYXcsIHNlY29uZEhhbmQsIHN0YXJ0O1xuXG4gIGRvbUVsID0gbnVsbDtcblxuICBzZWNvbmRIYW5kID0gbnVsbDtcblxuICBtaW51dGVIYW5kID0gbnVsbDtcblxuICBob3VySGFuZCA9IG51bGw7XG5cbiAgb25lU2Vjb25kID0gNjtcblxuICBvbmVIb3VyID0gMzA7XG5cbiAgcmVkcmF3ID0gZnVuY3Rpb24oc2Vjb25kcywgbWludXRlcywgaG91cnMpIHtcbiAgICBzZWNvbmRIYW5kLmNzcygndHJhbnNmb3JtJywgXCJyb3RhdGUoXCIgKyAoc2Vjb25kcyAqIG9uZVNlY29uZCkgKyBcImRlZylcIik7XG4gICAgbWludXRlSGFuZC5jc3MoJ3RyYW5zZm9ybScsIFwicm90YXRlKFwiICsgKG1pbnV0ZXMgKiBvbmVTZWNvbmQpICsgXCJkZWcpXCIpO1xuICAgIHJldHVybiBob3VySGFuZC5jc3MoJ3RyYW5zZm9ybScsIFwicm90YXRlKFwiICsgKGhvdXJzICogb25lSG91cikgKyBcImRlZylcIik7XG4gIH07XG5cbiAgc3RhcnQgPSBmdW5jdGlvbihzZWNvbmRzLCBtaW51dGVzLCBob3Vycykge1xuICAgIHZhciB1cGRhdGU7XG5cbiAgICBpZiAoc2Vjb25kcyA9PSBudWxsKSB7XG4gICAgICBzZWNvbmRzID0gMDtcbiAgICB9XG4gICAgaWYgKG1pbnV0ZXMgPT0gbnVsbCkge1xuICAgICAgbWludXRlcyA9IDA7XG4gICAgfVxuICAgIGlmIChob3VycyA9PSBudWxsKSB7XG4gICAgICBob3VycyA9IDA7XG4gICAgfVxuICAgIHVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdztcblxuICAgICAgc2V0VGltZW91dCh1cGRhdGUsIDEwMDApO1xuICAgICAgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiByZWRyYXcobm93LmdldFNlY29uZHMoKSwgbm93LmdldE1pbnV0ZXMoKSwgbm93LmdldEhvdXJzKCkpO1xuICAgIH07XG4gICAgcmV0dXJuIHVwZGF0ZSgpO1xuICB9O1xuXG4gIGFkZFRpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIHRpY2ssIHRpY2tEaXN0YW5jZSwgX2ksIF9qLCBfcmVzdWx0cztcblxuICAgIHRpY2tEaXN0YW5jZSA9IGRvbUVsLmhlaWdodCgpIC8gMjtcbiAgICBmb3IgKGkgPSBfaSA9IDA7IF9pIDwgNjA7IGkgPSArK19pKSB7XG4gICAgICBpZiAoaSAlIDUgPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aWNrID0gJChcIjxkaXYgY2xhc3M9J3RpY2sgbWludXRlJz5cIik7XG4gICAgICB0aWNrLmNzcygndHJhbnNmb3JtJywgXCJyb3RhdGUoXCIgKyAoaSAqIG9uZVNlY29uZCkgKyBcImRlZykgdHJhbnNsYXRlM2QoMCwgXCIgKyB0aWNrRGlzdGFuY2UgKyBcInB4LCAwKVwiKTtcbiAgICAgIGRvbUVsLmFwcGVuZCh0aWNrKTtcbiAgICB9XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBfaiA9IDA7IF9qIDwgMTI7IGkgPSArK19qKSB7XG4gICAgICB0aWNrID0gJChcIjxkaXYgY2xhc3M9J3RpY2sgaG91cic+XCIpO1xuICAgICAgdGljay5jc3MoJ3RyYW5zZm9ybScsIFwicm90YXRlKFwiICsgKGkgKiBvbmVIb3VyKSArIFwiZGVnKSB0cmFuc2xhdGUzZCgwLCBcIiArIHRpY2tEaXN0YW5jZSArIFwicHgsIDApXCIpO1xuICAgICAgX3Jlc3VsdHMucHVzaChkb21FbC5hcHBlbmQodGljaykpO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH07XG5cbiAgZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbih0aGVEb21FbCkge1xuICAgIGRvbUVsID0gdGhlRG9tRWw7XG4gICAgc2Vjb25kSGFuZCA9ICQoXCI8ZGl2IGNsYXNzPSdzZWNvbmQgaGFuZCc+XCIpO1xuICAgIG1pbnV0ZUhhbmQgPSAkKFwiPGRpdiBjbGFzcz0nbWludXRlIGhhbmQnPlwiKTtcbiAgICBob3VySGFuZCA9ICQoXCI8ZGl2IGNsYXNzPSdob3VyIGhhbmQnPlwiKTtcbiAgICBhZGRUaWNrcygpO1xuICAgIGRvbUVsLmFwcGVuZChob3VySGFuZCk7XG4gICAgZG9tRWwuYXBwZW5kKG1pbnV0ZUhhbmQpO1xuICAgIGRvbUVsLmFwcGVuZChzZWNvbmRIYW5kKTtcbiAgICBkb21FbC5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdzY3Jldyc+XCIpO1xuICAgIHJldHVybiBzdGFydCgpO1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbG9jaywgY2xvY2tFbDtcblxuICAgIHJlcXVpcmUoJy4vYXBwX21hbmFnZXInKSgkKGRvY3VtZW50LmJvZHkpKTtcbiAgICBjbG9jayA9IHJlcXVpcmUoJy4vY2xvY2snKTtcbiAgICBjbG9ja0VsID0gJCgnI2Nsb2NrJyk7XG4gICAgcmV0dXJuIGNsb2NrLnJlbmRlcihjbG9ja0VsKTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iXX0=
;