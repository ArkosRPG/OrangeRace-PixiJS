var WINDOWUPY;
var WINDOWDOWNY;
var windowBestText;

function CreateWindow(container, atlas,  wndwSpriteName, windowMap, WINDOWSIZEX, WINDOWSIZEY, btnSpriteName, buttonMap, BTNSIZEX, BTNSIZEY, X, Y)
{
    InitWindow(WINDOWSIZEY, Y);
    DrawWindow(container, atlas,  wndwSpriteName, windowMap, WINDOWSIZEX, WINDOWSIZEY, btnSpriteName, buttonMap, BTNSIZEX, BTNSIZEY, X);
    //container.y = WINDOWUPY;
    //container.alpha = 0;
}

function InitWindow(WINDOWSIZEY, Y)
{
    WINDOWUPY = -CELL*WINDOWSIZEY/2;
    WINDOWDOWNY = Y*CELL;
}

function DrawWindow(container, atlas,  wndwSpriteName, windowMap, WINDOWSIZEX, WINDOWSIZEY, btnSpriteName, buttonMap, BTNSIZEX, BTNSIZEY, X)
{
    DrawTiledRect(container, windowMap, WINDOWSIZEX, WINDOWSIZEY, X, 0, wndwSpriteName, atlas);

    var btnX = X+(WINDOWSIZEX-2)/2;
    var btnY = WINDOWSIZEY-1.5;
    DrawTiledRect(container, buttonMap, BTNSIZEX, BTNSIZEY, btnX, btnY, btnSpriteName, atlas);
    DrawText(container, "You won!", CELL*(btnX+BTNSIZEX/2), CELL, 48, .5);
    windowBestText=
    DrawText(container, "Best lap: <error>", CELL*(btnX+BTNSIZEX/2), CELL*2.75, 36, .5);
    DrawText(container, "Restart!", CELL*(btnX+BTNSIZEX/2), CELL*(btnY+BTNSIZEY/2), 24, .5);
}
