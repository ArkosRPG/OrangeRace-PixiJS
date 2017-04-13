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
            time += "\nLap:  " + FormatTime(car.lapTime);

        if(car.bestTime != undefined)
            time += "\nBest: "+ FormatTime(car.bestTime);

        timerText.text = time;
    }
}
