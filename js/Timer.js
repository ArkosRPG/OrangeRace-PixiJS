var timerText;

function DrawTimer()
{
    timerText = new Text("Loading...",{
        fontFamily: 'Roboto',
        fontSize:   24,
        fontStyle:  'bold',
        fill:       '#ff8800',
        align:      'center',
        stroke:     '#884400',
        strokeThickness: 10,
        lineJoin:   'round'
    });
    timerText.position.set(CELL*SIZEX/2, 0);
    timerText.anchor.set(.5,0);
    HUDcontainer.addChild(timerText);

    HUDcanvas.render(HUDcontainer);
}

function UpdateTimer()
{
    if(car.trackStart === undefined)
    {
        timerText.text = "Start!";
    }
    else
    {
        var time = new Date().valueOf() - car.trackStart;
        time = "Time: "+ (((time - time%1000)/1000)<<0) +":"+ (time%1000);

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

        var bestTime = storeCollecton.at(0).get('bestTime');
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
