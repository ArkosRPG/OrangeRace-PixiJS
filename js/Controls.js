function SetupControls()
{
    car.vx = 0;
    car.vy = 0;
    
    var left  = keyboard(37),
        up    = keyboard(38),
        right = keyboard(39),
        down  = keyboard(40);

    left.press = function() {
        car.vx = -5;
    };
    left.release = function() {
        if (!right.isDown) {
            car.vx = 0;
        }
    };

    up.press = function() {
        car.vy = -5;
    };
    up.release = function() {
        if (!down.isDown) {
            car.vy = 0;
        }
    };

    right.press = function() {
        car.vx = 5;
    };
    right.release = function() {
        if (!left.isDown) {
            car.vx = 0;
        }
    };

    down.press = function() {
        car.vy = 5;
    };
    down.release = function() {
        if (!up.isDown) {
            car.vy = 0;
        }
    };

    state = play;
}

function play()
{
  car.x += car.vx;
  car.y += car.vy
}
