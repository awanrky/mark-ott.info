{{{ "title" : "Arduino Bite", "tags" : [ "arduino", "pablosfiesta" ], "category" : "arduino", "date" : "2013-10-27 10:27:53" }}}

Last week I stepped into a nest of yellow jackets and got quite a few stings.  Yesterday I got bit by a bug that I think will have much longer lasting effects.  Its name is Arduino.  

It happened during <a href="">Pablo's Fiesta</a>, an Open Spaces conference that took place just down the road from my apartment.  I had a great time.  The worst part was trying to pick among all the good sessions that took place simultaneously.  

Just after lunch I went to a session called Arduino (and friends) Show and Tell.  It didn't take long for me to become jealous of everyone's toys and by the time it was over my mind started racing about all the little things I could try with one of these gadgets!  I keep wishing for things that don't exist, or that are prohibitively expensive, and I think that now I just might be able to make some of them.

So I left early and went to Fry's, where I new they had some in stock, and I picked up a starter kit.  It has a Uno, some LEDs, breadboard, etc., and I went home to play.

It didn't take long to work through the first few projects and read through the rest (boring little examples that didn't do at all what I had in mind) so I started to expiriment a bit with the servo I also picked up.

I spent today trying to think through some ideas and ordering some more parts.  When they get in I get to expiriment some more!  In the meantime I am going to start setting up a bit of infrastructure.

There are three different things I'd like to try...

 - I'd like a way to be able to wirelessly stream audio (and maybe video) from my front room to my deck outside.  I don't really think the Arduino is a good fit here, but I'm still thinking about how to do it, with something...

 - I want to do some (for lack of a better term) home automation.  A big part of this is just collecting data, not really automating.  For instance, inside/outside temperature, humidity, maybe even barometric pressure.  To go along with that, I'd like to control my heat/air programatically and remotely.  Control position of webcam(s).  This will be the project I start with.

 - I want to wire up my bicycle!  I've always liked strapping gadgets to my handlebars--GPS, cameras, cadence meter, heart-rate meter, phone... But none of these things ever talked to each other well, or at all.  With an arduino (and maybe a Raspberry Pi) I can re-create these gadgets, link them all together and even with the help of my phone, to my home computers.

 For the home automation project I'm going to start by sticking my Raspberry Pi and an Arduino behind my TV, connected to my home network.  I'll set up a small web server (NodeJS, of course!) on the Pi and add a few sensors (already on order) to the Arduino.  I'm also going to try a very basic setup to control the heat/air (the thermostat is also behind the TV) by using a servo to move the temperature control.  I'd like to just replace the thermostat with some relays connected to the Arduino, but for now simpler is better.  I'm also going to stick my webcam on top of another servo so that I can rotate it 90 degrees.

 For my bicycle I'll eventually pick up a smaller Arduino and just start by connecting a couple of Hall Effect sensors to measure my cadence and wheel speed.  A GPS will come soon after, along with sensors for temperature and humidity.  Eventually I may add a LCD screen (maybe with touch), or I may just use my phone as the interface.  And I also saw that Polar has a heart rate receiver that will work with an Arduino!  What else?  I'd like to measure measure wattage as applied to the pedals, but I don't really have any ideas on how to do that yet.  There are some pressure sensitive sensors avaliable, but they don't look like they would be a good fit, and they're not supposed to be that accurate.  Oh, I'll need some way to power it all.  AA batteries?  A rechargable battery from a laptop?  One of those rechargable phone chargers?  Or maybe some solar panels!

 There's so much to do!

