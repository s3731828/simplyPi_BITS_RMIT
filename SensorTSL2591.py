import board
import time
import busio
import adafruit_tsl2591
i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_tsl2591.TSL2591(i2c)

# Sensor Sensitivity Change (LOW/MED/HIGH/MAX)
sensor.gain = adafruit_tsl2591.GAIN_MED
#Integration time, time the sensor will gather data per reading (1,2,3,4,5,600)
adafruit_tsl2591.INTEGRATIONTIME_300MS

print('Light: {0}lux'.format(sensor.lux))
print('Visible: {0}'.format(sensor.visible))
print('Infrared: {0}'.format(sensor.infrared))

#Categories
#Visible - digital reading value for visible spectrum
#Infrared - digital reading value for infrared
#All - Lux value for entire spectrum
while True:
    visible = sensor.visible
    lux = sensor.lux
    infrared = sensor.infrared
    print('Visible',visible)
    print('Infrared',infrared)
    print('All',lux)
    time.sleep(3)

# Typical ranges:
# <10 Dark
# 20-40 Shade/low lighting
# 40-60 Lit room



