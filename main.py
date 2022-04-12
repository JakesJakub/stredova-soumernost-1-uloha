A = 0

def on_button_pressed_a():
    global A
    basic.clear_screen()
    A += 1
    if A == 1:
        led.plot_brightness(2, 2, 100)
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(4, 4)
        led.plot(3, 4)
        led.plot(4, 3)
        led.plot(3, 3)

    if A == 2:
        led.plot_brightness(2, 2, 100)
        led.plot(0, 0)
        led.plot(0, 2)
        led.plot(2, 0)
        led.plot(2, 2)
        led.plot(4, 4)
        led.plot(2, 4)
        led.plot(4, 2)
        led.plot(2, 2)

    if A == 3:
        led.plot_brightness(2, 2, 100)
        led.plot(0, 0)
        led.plot(0, 3)
        led.plot(3, 0)
        led.plot(3, 3)
        led.plot(4, 4)
        led.plot(1, 4)
        led.plot(4, 1)
        led.plot(1, 1)
        A -= 3
input.on_button_pressed(Button.A, on_button_pressed_a)
