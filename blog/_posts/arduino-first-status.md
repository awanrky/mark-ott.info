{{{ "title" : "Arduino First Status", "tags" : [ "arduino", "home" ], "category" : "arduino", "date" : "2013-11-03 22:30:32" }}}

Been fiddling with the Arduino some, testing out sensors, trying out servos, picking up some basic equipment...

![Fiddling Station](https://s3.amazonaws.com/mark-ott-info/images/blog/2013/11/arduino-first-status-WP_20131103_005.jpg)

Starting to work on the home monitoring station.  Figure I'll start with monitoring temperature and light level (cause they are easy) and move on to putting a servo on my thermostat.  I have a breadboard wired up with some sensors and servos to play with...

![Arduino and Breadboard](https://s3.amazonaws.com/mark-ott-info/images/blog/2013/11/arduino-first-status-WP_20131103_004.jpg)

...and I stuck up the <a href="https://github.com/awanrky/arduino-home">framework of a project on github</a>...

I'm going to use my Raspberry Pi as a web server, set up a Mongo database on my main workstation, and of course, the Arduino.

I was considering several different alternatives for communication with the Arduino.  The Johnny-Five library seems nice, and I could do the entire project with JavaScript/HTML/CSS.  However, I am pretty sure everything I am thinking of doing isn't supported with Johnny-Five (especially when I get to my bicycle, and the Hall Effect Sensors).  I think I'd have the same issue if I went a little lower level and had my JavaScript talk directly to StandardFirmata.  So I think I'll try the SerialPort library from the server, and control the hardware with C code on the Arduino.  I think this will be more fun as well! : )

I've learned a few things about programming the Arduino...

 - I don't have to use straight C, I can use C++.
 - I can organize my code even more by writing modules instead of sticking everything in one file.
 - I don't have to use Arduino IDE as the editor.  I can set 'Use External Editor' in the IDE and just use the IDE for compiling and uploading the code.
 - sprintf doesn't really seem to work, at least with floating point values.  Looks like it may be best just to stream the data directly to the serial port instead of trying to format things on the Arduino, anyway.
 - I've done all this before---sorta.  Not for the Arduino, of course.  The device I was writing to was already installed on every computer at the time.  Back then it was what we hooked printers to, and we sometimes called it a parallel port.  : )  In essence though, it had pins, and we could read and write to the value of the pins, just like the digital pins on the Arduino.  And I was doing all this in the 90s, using C!

 So far, the web server is set up and is running on the Pi.  There's nothing there yet to serve, though.

 I have a couple of classes written for two of the sensors--the easy ones--the TMP36 temperature sensor and the Cd5 Photo Sensor.

 That's about it so far : )