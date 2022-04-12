let A = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    A += 1
    if (A == 1) {
        led.plotBrightness(2, 2, 100)
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(4, 4)
        led.plot(3, 4)
        led.plot(4, 3)
        led.plot(3, 3)
    }
    
    if (A == 2) {
        led.plotBrightness(2, 2, 100)
        led.plot(0, 0)
        led.plot(0, 2)
        led.plot(2, 0)
        led.plot(2, 2)
        led.plot(4, 4)
        led.plot(2, 4)
        led.plot(4, 2)
        led.plot(2, 2)
    }
    
    if (A == 3) {
        led.plotBrightness(2, 2, 100)
        led.plot(0, 0)
        led.plot(0, 3)
        led.plot(3, 0)
        led.plot(3, 3)
        led.plot(4, 4)
        led.plot(1, 4)
        led.plot(4, 1)
        led.plot(1, 1)
        A -= 3
    }
    
})
