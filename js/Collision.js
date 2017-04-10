function CollisionCheck(car)
{
    var CARLENGTH  = CELL*.6;
    var CARWIDTH_2 = CELL*.3;

    var sin = Math.sin(car.rotation);
    var cos = Math.cos(car.rotation);

    var x = car.x + CARLENGTH * sin;
    var y = car.y - CARLENGTH * cos;
    var dx = CARWIDTH_2 * cos;
    var dy = CARWIDTH_2 * sin;
    lx = (x+dx)<<0;
    ly = (y+dy)<<0;
    rx = (x-dx)<<0;
    ry = (y-dy)<<0;
    x  =  x    <<0;
    y  =  y    <<0;

    // collision tracking
    if(false)
    {
        var q = new Sprite(trackAtlas["2px"]);
        q.position.set(x, y);
        carContainer.addChild(q);
        q = new Sprite(trackAtlas["2px"]);
        q.position.set(lx, ly);
        carContainer.addChild(q);
        q = new Sprite(trackAtlas["2px"]);
        q.position.set(rx, ry);
        carContainer.addChild(q);
    }

    if( x<0|| x>CELL*SIZEX) return true;
    if( y<0|| y>CELL*SIZEY) return true;
    if(lx<0||lx>CELL*SIZEX) return true;
    if(ly<0||ly>CELL*SIZEY) return true;
    if(rx<0||rx>CELL*SIZEX) return true;
    if(ry<0||ry>CELL*SIZEY) return true;

    var pixelC = 4*( x +  y * CELL*SIZEX);
    var dPixel = 4*(dx + dy * CELL*SIZEX);
    var pixelL = pixelC - dPixel;
    var pixelR = pixelC + dPixel;

    if(trackPixelData[pixelL+1] === 0) return true;
    if(trackPixelData[pixelC+1] === 0) return true;
    if(trackPixelData[pixelR+1] === 0) return true;
}
