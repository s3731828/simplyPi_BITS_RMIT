import board
import time
import busio
import adafruit_tsl2591
i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_tsl2591.TSL2591(i2c)

#print('Light: {0}lux'.format(sensor.lux))
#print('Visible: {0}'.format(sensor.visible))
#print('Infrared: {0}'.format(sensor.infrared))
sensor.gain = adafruit_tsl2591.GAIN_MED

while True:
    visible = sensor.visible
    lux = sensor.lux
    print('Visible',visible)
    print('All',lux)
    time.sleep(3)

# Typical ranges:
# <10 Dark
# 20-40 Shade/low lighting
# 40-60 Lit room

