$ ->
  require('./app_manager') $(document.body)

  clock   = require('./clock')
  clockEl = $('#clock')

  clock.render clockEl
