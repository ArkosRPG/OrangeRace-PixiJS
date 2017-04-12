function SetupCar(container, atlas, spriteName, startPositionX, startPositionY)
{
    var car = new Sprite(atlas[spriteName]);
    car.anchor.x = .5;
    car.anchor.y = .6;
    container.addChild(car);
    ResetCar(car, startPositionX, startPositionY);
    return car;
}

function ResetCar(car, startPositionX, startPositionY)
{
    car.position.set(CELL*startPositionX, CELL*startPositionY);
    car.x += CELL * car.anchor.x;
    car.y += CELL * car.anchor.y;

    car.velocity     = 0;
    car.rotation     = 0;
    car.acceleration = 0;
    car.angle        = 0;

    car.trackStart   = undefined;
    car.startLapTime = undefined;
    car.lapTime      = undefined;
    car.bestTime     = window.localStorage.getItem('BestTime');
}
