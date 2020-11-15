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
    
#Categories
#Visible - digital reading value for visible spectrum
#Infrared - digital reading value for infrared
#All - Lux value for entire spectrum
while True:
    lux = round(sensor.lux,2)
    print('All',lux)
    print('*****'*5)
    time.sleep(3)

# Typical ranges:
# <10 Dark
# 10-40 Shade/low lighting
# 40-70 Bright room
# >70 is a focused light pointed at it.


