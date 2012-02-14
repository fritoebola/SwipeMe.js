window.swipe = function(settings){
	
	settings = {
		element: settings.element || null,
		startCallback: settings.startCallback || function(){},
		moveCallback: settings.moveCallback || function(){},
		endCallback: settings.endCallback || function(){},
		thresholdLength: settings.thresholdLength || 100
	};
	
	if(settings.element!==null){
		
		this.element = settings.element;
		
		var swipe = {
			length: 0,
			direction: 'none',
			sx: 0,
			sy: 0,
			ex: 0,
			ey: 0
		},
			tmpX = 0,
			tmpY = 0;
		
		if("ontouchstart" in window){
			
			var startX, startY;
			
			_touchStart = function(e){
				if(e.touches.length>1){
					_touchCancel();
				} else {
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
					swipe.sx = startX;
					swipe.sy = startY;
					settings.startCallback(swipe);
				}	
			};
			
			_touchMove = function(e){
				if(e.touches.length>1){
					_touchCancel();
				} else {
					e.preventDefault();
					tmpX = e.touches[0].pageX;
					tmpY = e.touches[0].pageY;
					swipe.ex = tmpX;
					swipe.ey =  tmpY;
					settings.moveCallback(swipe);
				}
			};
			
			_touchEnd = function(e){
				if(tmpX!==0&&tmpY!==0){					
					var tmpXLength = tmpX - startX,
						tmpYLength = tmpY - startY,
						tmpHypLength = Math.sqrt(Math.pow(tmpXLength,2)+Math.pow(tmpYLength,2)),
						tmpAngle = Math.atan2(tmpYLength,tmpXLength);
					if(tmpHypLength>=settings.thresholdLength){
						swipe.direction = _processAngle(_convertToDegrees(tmpAngle,true));
					}
					swipe.length = tmpHypLength;
					swipe.sx = startX;
					swipe.sy = startY;
					swipe.ex = tmpX;
					swipe.ey = tmpY;
					settings.endCallback(swipe);
				}
				_touchCancel();
			};
			
			_touchCancel = function(){
				swipe.length = 0;
				swipe.direction = 'none';
				swipe.sx = 0;
				swipe.sy = 0;
				swipe.ex = 0;
				swipe.ey = 0;
				tmpX = 0;
				tmpY = 0;
			};
		
			this.element.ontouchstart = _touchStart;
			this.element.ontouchmove = _touchMove;
			this.element.ontouchend = _touchEnd;
			this.element.ontouchcancel = _touchCancel;
		
		}
		
	}
	
	_processAngle = function(angle){
		if(angle<=45&&angle>=-45){
			return "right";
		} else if(angle>45&&angle<135){
			return "down";
		} else if(angle>-135&&angle<-45){
			return "up";
		} else {
			return "left";
		}
	};
	
	_convertToDegrees = function(radians,round){
		if(round){
			return Math.round(radians * 180/Math.PI);
		}
		return radians * 180/Math.PI;
	};
	_convertToRadians = function(degrees){
		return degrees * Math.PI/180;
	};
	
};