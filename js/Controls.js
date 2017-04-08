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
        car.vy = 0;
    };

    left.release = function() {
        if (!right.isDown && car.vy === 0) {
            car.vx = 0;
        }
    };

    up.press = function() {
        car.vy = -5;
        car.vx = 0;
    };

    up.release = function() {
        if (!down.isDown && car.vx === 0) {
            car.vy = 0;
        }
    };

    right.press = function() {
        car.vx = 5;
        car.vy = 0;
    };
    right.release = function() {
        if (!left.isDown && car.vy === 0) {
            car.vx = 0;
        }
    };

    down.press = function() {
        car.vy = 5;
        car.vx = 0;
    };
    down.release = function() {
        if (!up.isDown && car.vx === 0) {
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
