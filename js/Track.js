function DrawTrack()
{
    trackAtlas = PIXI.loader.resources["img/Track.json"].textures; 

    var trackMap = new Array(4, 22, 17, 17, 17, 17, 65, 17, 17, 17, 40, 58,
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

    var i = 0;
    for(var x = 0; x < SIZEX; x++)
    {
        for(var y = 0; y < SIZEY; y++)
        {
            if(trackMap[i] > 0)
            {
                var spriteName = "road_sand";
                if(trackMap[i] < 10)
                    spriteName += 0;
                spriteName += trackMap[i];
          
                var trackCell = new Sprite(trackAtlas[spriteName]);
                trackCell.position.set(x * CELL, y * CELL);
                trackContainer.addChild(trackCell);
            }
            i++;
        }
    }
    trackCanvas.render(trackContainer);
}
