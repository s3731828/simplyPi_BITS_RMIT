
import board
import busio
import adafruit_tsl2561
i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_tsl2561.TSL2561(i2c)

# Chnages sensor sensitivity (0/1) 0 for dark environments, 1 for normal lighting
# sensor.gain = 1

# Set integration time, time per reading (0=13.7ms, 1=101ms, 2=402ms, or 3=manual)
#tsl.integration_time = 2

# Enable the light sensor
#tsl.enabled = True

#Categories
# Lux - Overall light levels
# Infrared - Just the infrared readings

while True:
    print('Lux: {}'.format(sensor.lux))
    print('Infrared: {}'.format(sensor.infrared))

#     infrared = sensor.infrared
#     lux = sensor.lux
#     print('Infrared',infrared)
#     print('Light',lux)
    time.sleep(3)

# Typical ranges:
# <10 Dark
# 20-40 Shade/low lighting
# 40-60 Lit room
