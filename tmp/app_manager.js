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
