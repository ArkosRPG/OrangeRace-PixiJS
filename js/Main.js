//window.localStorage.clear();

var CELL = 64;
var SIZEX = 12;
var SIZEY = 12;

var appContainer = new Container(),
    trackContainer = new Container(),
    carContainer = new Container(),
    hudContainer = new Container(),
    windowContainer = new Container(),
    canvas = new PIXI.CanvasRenderer(CELL*SIZEX, CELL*SIZEY);
document.body.appendChild(canvas.view);
appContainer.addChild(trackContainer);
appContainer.addChild(carContainer);
appContainer.addChild(hudContainer);
appContainer.addChild(windowContainer);

var atlasPath = "img/Track.json",
    atlas,
    trackMap,
    windowMap,
    buttonMap,
    car,
    gameState;

loader
    .add(atlasPath)
    .load(StartGame)
    ;

function StartGame()
{
    atlas = LoadAtlas(atlasPath);
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
    windowMap = new Array(8,  26,  21,  44, 62,
                          9,  371, 372, 22, 63,
                          4,  40,  4,   22, 40,
                          4,  40,  4,   22, 40,
                          10, 201, 202, 22, 64,
                          11, 29,  23,  47, 65);
    buttonMap = new Array(76, 60);

    DrawTiledRect(trackContainer, trackMap, SIZEX, SIZEY, 0, 0, "road_sand", atlas);
    canvas.render(trackContainer);
    CollisionInit(canvas.view);

    CreateWindow(windowContainer, atlas, "road_asphalt", windowMap, 6, 5, "road_dirt", buttonMap, 2, 1, (SIZEX-6)/2, (SIZEY-5)/2);
    canvas.render(windowContainer);
    InitButton();

    //car2 = SetupCar(carContainer, atlas, "CarGray",   1, 9);
    car  = SetupCar(carContainer, atlas, "CarOrange", 1, 9);
    SetupControls();
    canvas.render(carContainer);

    InitTimer(hudContainer);
    canvas.render(hudContainer);

    gameState = PlayLoop;
    GameLoop();
}

function ClearGame()
{
    ResetCar(car,  1, 9);
    //ResetCar(car2, 1, 9);

    gameState = PlayLoop;
}

function GameLoop()
{
    requestAnimationFrame(GameLoop);

    // undefined - animations time
    // null      - w8ing for input
    if(gameState != undefined && gameState != null)
        gameState();
    UpdateTimer(car);

    canvas.render(appContainer);
}
