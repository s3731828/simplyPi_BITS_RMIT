from gpiozero import DigitalOutputDevice

waterPump = DigitalOutputDevice(26)

waterPump.blink(on_time = 1, off_time = 1, n = 1)