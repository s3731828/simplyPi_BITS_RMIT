import os
from pynput import keyboard

def on_press(key):
    try:
        if key == keyboard.Key.esc:
            os.system('python3 Transmitter.py -p 1615 -t 4 12345')
    except AttributeError:
            print('')
listener = keyboard.Listener(
    on_press=on_press)
listener.start()
