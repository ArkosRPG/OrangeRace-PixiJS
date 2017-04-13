var WINDOWUPY;
var WINDOWDOWNY;

function CreateWindow(container, atlas,  wndwSpriteName, windowMap, WINDOWSIZEX, WINDOWSIZEY, btnSpriteName, buttonMap, BTNSIZEX, BTNSIZEY, X, Y)
{
    InitWindow(WINDOWSIZEY, Y);
    DrawWindow(container, atlas,  wndwSpriteName, windowMap, WINDOWSIZEX, WINDOWSIZEY, btnSpriteName, buttonMap, BTNSIZEX, BTNSIZEY, X);
    container.y = WINDOWUPY;
    container.alpha = 0;
}

function InitWindow(WINDOWSIZEY, Y)
{
    WINDOWUPY = -CELL*WINDOWSIZEY/2;
    WINDOWDOWNY = Y*CELL;
}

function DrawWindow(container, atlas,  wndwSpriteName, windowMap, WINDOWSIZEX, WINDOWSIZEY, btnSpriteName, buttonMap, BTNSIZEX, BTNSIZEY, X)
{
    DrawTiledRect(container, windowMap, WINDOWSIZEX, WINDOWSIZEY, X, 0, wndwSpriteName, atlas);
    DrawTiledRect(container, buttonMap, BTNSIZEX, BTNSIZEY, X +(WINDOWSIZEX-2)/2, WINDOWSIZEY-1.5, btnSpriteName, atlas);
}
