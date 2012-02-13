#SwipeMe.js
###A small Javascript library making it easier to add touch functionality to a page.

#Installation
Put the script tag into the head tag of the document.

&lt;script src=&quot;swipeme.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

#Starting it
Call:

swipe({ element: document.getElementById('YOURELEMENT'), endCallback: function(swipeobj){ console.log(swipeobj); } });

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

***

Note to everyone who sees this: first time I've ever written in markdown format so I'm sorry if some of the styles are awkward such as the actual code bit.
