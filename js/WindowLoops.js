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

function ShowWinLoop()
{
    console.log("ShowWinLoop");
    gameState = undefined;
    createjs.Tween.get(windowContainer)
        .to({alpha:1, y: WINDOWDOWNY}, 1000, createjs.Ease.getPowInOut(2))
        .call(HandleWindow);
}

function HideWinLoop()
{
    console.log("HideWinLoop");
    gameState = undefined;
    createjs.Tween.get(windowContainer)
        .to({alpha:0, y: WINDOWUPY}, 1000, createjs.Ease.getPowInOut(2))
        .call(HandleRestart);
}

function HandleWindow()
{
    console.log("HandleWindow");
    gameState = HideWinLoop;
}

function HandleRestart()
{
    console.log("HandleRestart");
    ClearGame();
    gameState = PlayLoop;
}

