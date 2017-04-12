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

    var x  = car.x + CARLENGTH * sin;
    var y  = car.y - CARLENGTH * cos;
    var bx = car.x + CARLENGTH * sin*(car.anchor.y-.5);
    var by = car.y - CARLENGTH * cos*(car.anchor.y-.5);
    var mx = car.x + CARLENGTH * sin*(1.5-car.anchor.y)/2;
    var my = car.y - CARLENGTH * cos*(1.5-car.anchor.y)/2;
    var dx = CARWIDTH_2 * cos;
    var dy = CARWIDTH_2 * sin;
    lx = (x+dx)<<0;
    ly = (y+dy)<<0;
    rx = (x-dx)<<0;
    ry = (y-dy)<<0;
    x  =  x    <<0;
    y  =  y    <<0;
    bx =  bx   <<0;
    by =  by   <<0;
    mx =  mx   <<0;
    my =  my   <<0;

    // collision tracking
    // atlas required
    if(true)
    {
        var q = new Sprite(atlas["2px"]);
        q.position.set(x, y);
        carContainer.addChild(q);
        q = new Sprite(atlas["2px"]);
        q.position.set(lx, ly);
        carContainer.addChild(q);
        q = new Sprite(atlas["2px"]);
        q.position.set(rx, ry);
        carContainer.addChild(q);
        q = new Sprite(atlas["2px"]);
        q.position.set(bx, by);
        carContainer.addChild(q);
        q = new Sprite(atlas["2px"]);
        q.position.set(mx, my);
        carContainer.addChild(q);
    }

    if(lx<0||lx>CELL*SIZEX) return true;
    if(ly<0||ly>CELL*SIZEY) return true;
    if(rx<0||rx>CELL*SIZEX) return true;
    if(ry<0||ry>CELL*SIZEY) return true;

    var pixelM = 4*(mx + my * CELL*SIZEX);
    var pixelB = 4*(bx + by * CELL*SIZEX);
    var pixelC = 4*( x +  y * CELL*SIZEX);
    var dPixel = 4*(dx + dy * CELL*SIZEX);
    var pixelL = pixelC - dPixel;
    var pixelR = pixelC + dPixel;

    console.log(trackPixelData[pixelC]+":"+trackPixelData[pixelC+1]+":"+trackPixelData[pixelC+2]+":"+trackPixelData[pixelC+3]);

    if(trackPixelData[pixelM+1] === 0) return true;
    if(trackPixelData[pixelB+1] === 0) return true;
    if(trackPixelData[pixelL+1] === 0) return true;
    if(trackPixelData[pixelC+1] === 0) return true;
    if(trackPixelData[pixelR+1] === 0) return true;
    if(trackPixelData[pixelM] < 224) return true;
    if(trackPixelData[pixelB] < 224) return true;
    if(trackPixelData[pixelL] < 224) return true;
    if(trackPixelData[pixelC] < 224) return true;
    if(trackPixelData[pixelR] < 224) return true;
    if(trackPixelData[pixelM] > 236 && trackPixelData[pixelM] < 252) return true;
    if(trackPixelData[pixelB] > 236 && trackPixelData[pixelB] < 252) return true;
    if(trackPixelData[pixelL] > 236 && trackPixelData[pixelL] < 252) return true;
    if(trackPixelData[pixelC] > 236 && trackPixelData[pixelC] < 252) return true;
    if(trackPixelData[pixelR] > 236 && trackPixelData[pixelR] < 252) return true;
}
