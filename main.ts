input.onButtonPressed(Button.A, function () {
    basic.showString("mV1=")
    basic.showNumber(pins.analogReadPin(AnalogPin.P1) / 340 * 1000)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("mV2=")
    basic.showNumber(pins.analogReadPin(AnalogPin.P2) / 340 * 1000)
    basic.pause(1000)
})
datalogger.setColumnTitles(
"mV1",
"mV2"
)
loops.everyInterval(1000, function () {
    datalogger.log(
    datalogger.createCV("mV1", pins.analogReadPin(AnalogPin.P1) / 340 * 1000),
    datalogger.createCV("mV2", pins.analogReadPin(AnalogPin.P2) / 340 * 1000)
    )
})
basic.forever(function () {
	
})
