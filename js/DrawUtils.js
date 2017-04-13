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

function DrawText(container, label, X, Y, fontSize, anchorY)
{
    var text = new Text(label,{
        fontFamily: 'Roboto',
        fontSize:   fontSize,
        fontStyle:  'bold',
        fill:       '#ff8800',
        align:      'center',
        stroke:     '#884400',
        strokeThickness: fontSize/3,
        lineJoin:   'round'
    });
    text.position.set(X, Y);
    text.anchor.set(.5,anchorY);
    container.addChild(text);
    
    return text;
}

function FormatTime(time)
{
    var timeText =""+(((time - time%1000)/1000)<<0) +":";
    var mod = time%1000;
    if(mod>99)
        timeText += mod;
    else
    if(mod>9)
        timeText += "0"+mod;
    else
        timeText += "00"+mod;

    return timeText;
}
