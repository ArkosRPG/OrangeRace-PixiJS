var trackPixelData,
    CARLENGTH,
    CARWIDTH_2;


function CollisionInit(canvasView)
{
    CARLENGTH  = CELL*.6;
    CARWIDTH_2 = CELL*.3;
    trackPixelData = canvasView.getContext("2d").getImageData(0,0, CELL*SIZEX, CELL*SIZEY).data;
}

function CollisionCheck(car)
{
    var sin = Math.sin(car.rotation);
    var cos = Math.cos(car.rotation);

    var step = 1;

    for(var i = step; i <= car.velocity; i+=step)
    {
        var x  = car.x + CARLENGTH * sin;
        var y  = car.y - CARLENGTH * cos;
        var dx = CARWIDTH_2 * cos;
        var dy = CARWIDTH_2 * sin;
        lx = (x+dx)<<0;
        ly = (y+dy)<<0;
        rx = (x-dx)<<0;
        ry = (y-dy)<<0;
    
        // collision tracking
        // atlas required
        if(true)
        {
            var q = new Sprite(atlas["2px"]);
            q.position.set(lx, ly);
            carContainer.addChild(q);
            q = new Sprite(atlas["2px"]);
            q.position.set(rx, ry);
            carContainer.addChild(q);
        }
    
        if(lx<0||lx>CELL*SIZEX) return true;
        if(ly<0||ly>CELL*SIZEY) return true;
        if(rx<0||rx>CELL*SIZEX) return true;
        if(ry<0||ry>CELL*SIZEY) return true;
    
        var pixelC = 4*( x +  y * CELL*SIZEX);
        var dPixel = 4*(dx + dy * CELL*SIZEX);
        var pixelL = pixelC - dPixel;
        var pixelR = pixelC + dPixel;
    
        if(trackPixelData[pixelL+1] === 0) return true;
        if(trackPixelData[pixelR+1] === 0) return true;
        if(trackPixelData[pixelL] < 224) return true;
        if(trackPixelData[pixelR] < 224) return true;
        if(trackPixelData[pixelL] > 236 && trackPixelData[pixelL] < 252) return true;
        if(trackPixelData[pixelR] > 236 && trackPixelData[pixelR] < 252) return true;
    }
}
