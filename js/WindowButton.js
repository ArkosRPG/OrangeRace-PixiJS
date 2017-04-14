var canvasLeft,
    canvasTop,
    button;

function InitButton()
{
    canvasLeft = canvas.view.offsetLeft,
    canvasTop = canvas.view.offsetTop,

    button = {
        colour: '#05EFFF',
        width:  CELL*2,
        height: CELL,
        top:    CELL*7,
        left:   CELL*(SIZEX-2)/2
    };

    canvas.view.addEventListener('click', function(event)
                            {
                                var x = event.pageX - canvasLeft,
                                y = event.pageY - canvasTop;

                                if (gameState == null &&
                                    y > button.top  && y < button.top  + button.height &&
                                    x > button.left && x < button.left + button.width)
                                    HideWinLoop();
                            });
}
