import os
import keyboard
while True:
     try: 
        if keyboard.is_pressed('t'):
            print('You Pressed A Key!')
            break  # finishing the loop
    except:
        break  # if user pressed a key other than the given key the loop will break
os.system('python3 Transmitter.py -p 1615 -t 4 12345')
