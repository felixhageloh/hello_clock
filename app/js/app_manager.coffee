manifestUrl = 'http://'+window.location.hostname+'/hello_clock.webapp'
domEl       = null

installApp = ->
  request = navigator.mozApps.install manifestUrl
  request.onsuccess = -> alert 'Hello Clock has been installed'
  request.onerror   = -> alert @error.name

renderInstaller = (installerEl) ->
  installButton = $("<button>Add to home screen</button>")
  installButton.on 'click', installApp
  installerEl.html installButton

showInstaller = ->
  domEl.removeClass 'installed'
  renderInstaller domEl.find('#installer')

checkInstalled = ->
  request = window.navigator.mozApps.checkInstalled manifestUrl

  request.onsuccess = -> showInstaller() unless request.result
    

module.exports = (appDomEl) ->
  domEl = appDomEl

  domEl.addClass 'installed'
  checkInstalled() if navigator.mozApps?
    
        


