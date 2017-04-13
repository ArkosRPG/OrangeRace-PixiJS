function DrawTiledRect(container, map, SIZEX, SIZEY, DX, DY, spritePrefix, atlas)
{
    var i = 0;
    for(var x = 0; x < SIZEX; x++)
    {
        for(var y = 0; y < SIZEY; y++)
        {
            if(trackMap[i] > 0)
            {
                var spriteName = spritePrefix;
                if(map[i] < 10)
                    spriteName += 0;
                spriteName += map[i];
          
                var tile = new Sprite(atlas[spriteName]);
                tile.position.set((x+DX)*CELL, (y+DY)*CELL);
                container.addChild(tile);
            }
            i++;
        }
    }
}
