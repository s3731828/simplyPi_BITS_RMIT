import board
import busio
import adafruit_tsl2561
i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_tsl2561.TSL2561(i2c)

# sensor.gain = 1

while True:
    print('Lux: {}'.format(sensor.lux))
    print('Broadband: {}'.format(sensor.broadband))
    print('Infrared: {}'.format(sensor.infrared))
    print('Luminosity: {}'.format(sensor.luminosity))
#     visible = sensor.visible
#     lux = sensor.lux
#     print('Visible',visible)
#     print('All',lux)
    time.sleep(3)

# Typical ranges:
# <10 Dark
# 20-40 Shade/low lighting
# 40-60 Lit room



