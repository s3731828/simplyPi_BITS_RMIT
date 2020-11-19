#!/bin/bash

DATE=$(date +"%Y-%m-%d")

raspistill -w 1024 -h 768 -o /home/pi/mnt/gdrive/$DATE.jpg -fp -p 0,0,720,576