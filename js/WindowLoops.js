function ShowWinLoop()
{
    gameState = undefined;
    createjs.Tween.get(windowContainer)
        .to({alpha:1, y: WINDOWDOWNY}, 1000, createjs.Ease.getPowInOut(2))
        .call(HandleWindow);
}

function HandleWindow()
{
    // w8ing for button
    gameState = null;
}

function HideWinLoop()
{
    gameState = undefined;
    createjs.Tween.get(windowContainer)
        .to({alpha:0, y: WINDOWUPY}, 1000, createjs.Ease.getPowInOut(2))
        .call(HandleRestart);
}

function HandleRestart()
{
    ClearGame();
    gameState = PlayLoop;
}

