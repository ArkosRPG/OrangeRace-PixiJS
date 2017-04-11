function SetupControls()
{
    car.trackStart   = undefined;
    car.startLapTime = undefined;
    car.lapTime      = undefined;
    car.bestTime     = undefined;

    car.anchor.x = .5;
    car.anchor.y = .6;
    car.x += CELL * car.anchor.x;
    car.y += CELL * car.anchor.y;

    var dAccel   = .1;
    var dRotate  = .05;

    car.velocity     = 0;
    car.rotation     = 0;
    car.acceleration = 0;
    car.angle        = 0;
    
    var left  = keyboard(37),
        up    = keyboard(38),
        right = keyboard(39),
        down  = keyboard(40);

    left.press = function() {
        car.angle = -dRotate;
    };
    left.release = function() {
        if (!right.isDown) {
            car.angle = 0;
        }
    };

    up.press = function() {
        car.acceleration = dAccel;
    };
    up.release = function() {
        if (!down.isDown) {
            car.acceleration = -dAccel;
        }
    };

    right.press = function() {
        car.angle = dRotate;
    };
    right.release = function() {
        if (!left.isDown) {
            car.angle = 0;
        }
    };

    down.press = function() {
        car.acceleration = -3*dAccel;
    };
    down.release = function() {
        if (!up.isDown) {
            car.acceleration = -dAccel;
        }
    };

    state = play;
}

function play()
{
    car.velocity += car.acceleration;
    var MAXSPEED = 10;
    if(car.velocity > MAXSPEED)
        car.velocity = MAXSPEED;
    if(car.velocity < 0)
        car.velocity = 0;

    car.rotation += car.angle;
    if(car.rotation > Math.PI*2)
        car.rotation -= Math.PI*2;
    if(car.rotation < -Math.PI*2)
        car.rotation += Math.PI*2;


    if(CollisionCheck(car)) car.velocity = 0;


    var oldY = car.y;

    car.x += car.velocity * Math.sin(car.rotation);
    car.y -= car.velocity * Math.cos(car.rotation);

    if(car.x<3*CELL)
    {
        if(oldY >  6.5*CELL &&
          car.y <= 6.5*CELL)
        {
            console.log("Lap!");
            if(car.trackStart === undefined)
            {
                car.trackStart =
                car.startLapTime  = new Date().valueOf();
            }
            else
            {
                car.lapTime = new Date().valueOf() - car.startLapTime;
                car.startLapTime = new Date().valueOf();
                console.log(storeCollecton.at(0).get('bestTime'));
                var bestTime = storeCollecton.at(0).get('bestTime');
                if(bestTime === undefined || car.bestTime > car.lapTime)
                {
                    storeCollecton.set([{bestTime: car.lapTime}]);
                    //storeCollecton.save();
                }
            }
        }
    }


    if(car.x > CELL*SIZEX)
        car.x = CELL*SIZEX;
    if(car.x < 0)
        car.x = 0;
    if(car.y > CELL*SIZEY)
        car.y = CELL*SIZEY;
    if(car.y < 0)
        car.y = 0;
}
