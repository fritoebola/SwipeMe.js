#SwipeMe.js
###A small Javascript swipe plugin for touch devices.

#Installation
Put the script tag into the head tag of the document.

`<script type="text/javascript" src="SwipeMe.js"></script>`

#Starting it
Call:

`swipe({
				element: document.getElementById('TARGETELEMENT'),
				endCallback: function(swipe){
					console.log(swipe.direction+" "+swipe.length);
				}
			});`

#Properties
**element** - The element you want to attach the events to.

**startCallback** - The callback function when a touchevent is started.

**moveCallback** - The callback function when a touchmove is triggered.

**endCallback** - The callback function when a touchend is triggered.

**thresholdLength** - The minimum distance the touch needs go before it is picked up.

***

All of the callback functions pass back a swipe object consisting of:

**length** - The length of the swipe.

**direction** - The direction of the swipe if registered.

**sx** - The x coordinate of the start touch.

**sy** - The y coordinate of the start touch.

**ex** - The x coordinate of the end touch.

**ey** - The y coordinate of the end touch.

***

Note to everyone who sees this: first time I've ever written in markdown format so I'm sorry if some of the styles are awkward such as the actual code bit.
