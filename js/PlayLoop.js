function PlayLoop()
{
    car.velocity += car.acceleration;
    var MAXSPEED = 7.5;
    if(car.velocity > MAXSPEED)
        car.velocity = MAXSPEED;
    if(car.velocity < 0)
        car.velocity = 0;

    car.rotation += car.angle;
    if(car.rotation > Math.PI*2)
        car.rotation -= Math.PI*2;
    if(car.rotation < -Math.PI*2)
        car.rotation += Math.PI*2;


    car.velocity = CollisionCheck(car);


    var oldY = car.y;

    car.x += car.velocity * Math.sin(car.rotation);
    car.y -= car.velocity * Math.cos(car.rotation);

    if(car.x<3*CELL)
    {
        if(oldY >  6.5*CELL &&
          car.y <= 6.5*CELL)
        {
            console.log("Lap!");
            ++car.lapCount;

            if(car.trackStart === undefined)
            {
                car.trackStart =
                car.startLapTime  = new Date().valueOf();
            }
            else
            {
                car.lapTime = new Date().valueOf() - car.startLapTime;
                car.startLapTime = new Date().valueOf();
                var bestTime = window.localStorage.getItem('BestTime');
                if(bestTime === null || bestTime === undefined || bestTime > car.lapTime)
                {
                    window.localStorage.setItem('BestTime', car.lapTime);
                    car.bestTime = car.lapTime;
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

    if(car.lapCount >= car.lapsToWin)
        gameState = ShowWinLoop;
}
