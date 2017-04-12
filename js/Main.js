var CELL = 64;
var SIZEX = 12;
var SIZEY = 12;

var appContainer = new Container(),
    trackContainer = new Container(),
    carContainer = new Container(),
    hudContainer = new Container(),
    canvas = new PIXI.CanvasRenderer(CELL*SIZEX, CELL*SIZEY);
document.body.appendChild(canvas.view);
appContainer.addChild(trackContainer);
appContainer.addChild(carContainer);
appContainer.addChild(hudContainer);

var atlasPath = "img/Track.json",
    atlas,
    trackMap,
    car,
    gameState;

loader
    .add(atlasPath)
    .load(InitGame)
    ;

function InitGame()
{
    trackMap = new Array(4, 22, 17, 17, 17, 17, 65, 17, 17, 17, 40, 58,
                         5, 23, 19, 19, 19, 41, 66, 79, 79, 79, 18, 59,
                         6, 24, 17, 40, 58, 3, 67, 19, 19, 19, 41, 36,
                         7, 25, 19, 41, 59, 4, 22, 17, 40, 58, 90, 36,
                         0, 0, 11, 29, 36, 5, 23, 19, 41, 59, 90, 36,
                         0, 0, 12, 18, 47, 90, 36, 11, 29, 36, 90, 36,
                         0, 11, 29, 30, 48, 90, 36, 12, 18, 47, 90, 36,
                         0, 12, 18, 47, 0, 90, 36, 90, 30, 48, 90, 36,
                         4, 29, 30, 48, 11, 29, 47, 90, 36, 0, 90, 36,
                         5, 23, 21, 0, 12, 30, 48, 90, 36, 0, 90, 36,
                         6, 24, 17, 17, 42, 60, 0, 6, 24, 17, 42, 60,
                         7, 25, 19, 19, 43, 61, 0, 7, 25, 19, 43, 61);

    atlas = LoadAtlas(atlasPath);
    DrawTrack(trackContainer, trackMap, "road_sand", atlas);
    canvas.render(trackContainer);
    CollisionInit(canvas.view);
    StartGame();
}

function StartGame()
{
    car2 = SetupCar(carContainer, atlas, "CarGray",   1, 9);
    car  = SetupCar(carContainer, atlas, "CarOrange", 1, 7);
    canvas.render(carContainer);

    SetupControls();
    DrawTimer(hudContainer);
    canvas.render(hudContainer);

    gameState = PlayLoop;
    GameLoop();
}

function ClearGame()
{
    ResetCar(car);
    StartGame();
}

function GameLoop()
{
    requestAnimationFrame(GameLoop);

    gameState();
    UpdateTimer(car);

    canvas.render(appContainer);
}
