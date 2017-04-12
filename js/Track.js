function DrawTrack(container, trackMap, spritePrefix, atlas)
{
    var i = 0;
    for(var x = 0; x < SIZEX; x++)
    {
        for(var y = 0; y < SIZEY; y++)
        {
            if(trackMap[i] > 0)
            {
                var spriteName = spritePrefix;
                if(trackMap[i] < 10)
                    spriteName += 0;
                spriteName += trackMap[i];
          
                var trackCell = new Sprite(atlas[spriteName]);
                trackCell.position.set(x * CELL, y * CELL);
                container.addChild(trackCell);
            }
            i++;
        }
    }
}
