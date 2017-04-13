function SetupControls()
{
    var dAccel   = .1;
    var dRotate  = .075;

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
}
