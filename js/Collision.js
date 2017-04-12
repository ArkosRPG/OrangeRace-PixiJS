var trackPixelData,
    CARLENGTH,
    CARWIDTH_2;


function CollisionInit(canvasView)
{
    CARLENGTH  = CELL*.55;
    CARWIDTH_2 = CELL*.25;
    trackPixelData = canvasView.getContext("2d").getImageData(0,0, CELL*SIZEX, CELL*SIZEY).data;
}

function CollisionCheck(car)
{
    var sin = Math.sin(car.rotation);
    var cos = Math.cos(car.rotation);

    var step = 1;

    for(var i = 0; i <= car.velocity; i+=step)
    {
        var x  = car.x + (CARLENGTH+i) * sin;
        var y  = car.y - (CARLENGTH+i) * cos;
        var dx = CARWIDTH_2 * cos;
        var dy = CARWIDTH_2 * sin;
        lx = (x+dx)<<0;
        ly = (y+dy)<<0;
        rx = (x-dx)<<0;
        ry = (y-dy)<<0;
        x  =  x    <<0;
        y  =  y    <<0;
    
        // collision tracking
        // atlas required
        if(false)
        {
            var q = new Sprite(atlas["2px"]);
            q.position.set(x, y);
            carContainer.addChild(q);
            var q = new Sprite(atlas["2px"]);
            q.position.set(lx, ly);
            carContainer.addChild(q);
            q = new Sprite(atlas["2px"]);
            q.position.set(rx, ry);
            carContainer.addChild(q);
        }
    
        if(lx<0||lx>CELL*SIZEX) return i;
        if(ly<0||ly>CELL*SIZEY) return i;
        if(rx<0||rx>CELL*SIZEX) return i;
        if(ry<0||ry>CELL*SIZEY) return i;
    
        var pixelL = 4*(lx + ly * CELL*SIZEX);
        var pixelC = 4*( x +  y * CELL*SIZEX);
        var pixelR = 4*(rx + ry * CELL*SIZEX);
    
        //console.log(trackPixelData[pixelC]+":"+
        //            trackPixelData[pixelC+1]+":"+
        //            trackPixelData[pixelC+2]+":"+
        //            trackPixelData[pixelC+3]);
    
        if(trackPixelData[pixelL+1] === 0) return i;
        if(trackPixelData[pixelC+1] === 0) return i;
        if(trackPixelData[pixelR+1] === 0) return i;
        if(trackPixelData[pixelL] < 224) return i;
        if(trackPixelData[pixelC] < 224) return i;
        if(trackPixelData[pixelR] < 224) return i;
        if(trackPixelData[pixelL] > 236 && trackPixelData[pixelL] < 252) return i;
        if(trackPixelData[pixelC] > 236 && trackPixelData[pixelC] < 252) return i;
        if(trackPixelData[pixelR] > 236 && trackPixelData[pixelR] < 252) return i;
    }

    return car.velocity;
}
