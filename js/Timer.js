var timerText;

function InitTimer(container)
{
    timerText = DrawText(container, "Loading...", CELL*SIZEX/2, 0, 20, 0);
}

function UpdateTimer(car)
{
    if(car.trackStart === undefined)
    {
        timerText.text = "Start!";
    }
    else
    {
        var time = new Date().valueOf() - car.trackStart;
        time = "Time: "+ (((time - time%1000)/1000)<<0) +":"+ (time%1000);

        time += "\nLaps: "+car.lapCount+"/"+car.lapsToWin;

        if(car.lapTime != undefined)
        {
            time += "\nLap:  "+ (((car.lapTime - car.lapTime%1000)/1000)<<0) +":";
            var mod = car.lapTime%1000;
            if(mod>99)
                time += mod;
            else
            if(mod>9)
                time += "0"+mod;
            else
                time += "00"+mod;
        }

        var bestTime = car.bestTime;
        if(bestTime != undefined)
        {
            time += "\nBest: "+ (((bestTime - bestTime%1000)/1000)<<0) +":";
            var mod = bestTime%1000;
            if(mod>99)
                time += mod;
            else
            if(mod>9)
                time += "0"+mod;
            else
                time += "00"+mod;
        }

        timerText.text = time;
    }
}
