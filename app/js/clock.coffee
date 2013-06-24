domEl      = null
secondHand = null
minuteHand = null
hourHand   = null

oneSecond = 6
oneHour   = 30

redraw = (seconds, minutes, hours) ->
  secondHand.css 'transform', "rotate(#{seconds * oneSecond}deg)"
  minuteHand.css 'transform', "rotate(#{minutes * oneSecond}deg)"
  hourHand.css   'transform', "rotate(#{hours * oneHour}deg)"

start = (seconds = 0, minutes = 0, hours = 0) ->
  update = ->
    setTimeout update, 1000
    now = new Date()
    redraw now.getSeconds(), now.getMinutes(), now.getHours()

  update()

addTicks = ->
  tickDistance = domEl.height() / 2

  for i in [0...60]
    continue if i % 5 == 0
    tick = $("<div class='tick minute'>")
    tick.css 'transform', "rotate(#{i * oneSecond}deg) translate3d(0, #{tickDistance}px, 0)"
    domEl.append tick

  for i in [0...12]
    tick = $("<div class='tick hour'>")
    tick.css 'transform', "rotate(#{i * oneHour}deg) translate3d(0, #{tickDistance}px, 0)"
    domEl.append tick

exports.render = (theDomEl) ->
  domEl = theDomEl
  secondHand = $("<div class='second hand'>")
  minuteHand = $("<div class='minute hand'>")
  hourHand   = $("<div class='hour hand'>")

  addTicks()
  domEl.append hourHand
  domEl.append minuteHand
  domEl.append secondHand

  domEl.append "<div class='screw'>"

  start()
