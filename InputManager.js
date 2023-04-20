var keys = [new Key("ArrowRight")];

document.addEventListener("keydown", function(event)
{
    keys.forEach(function(index)
    {
        if(event.key == index.keyCode)
        {
            index.down = true;
            index.up = false;
        }
    });
});

document.addEventListener("keyup", function(event)
{
    keys.forEach(function(index)
    {
        if(event.key == index.keyCode)
        {
            index.down = false;
            index.up = true;
        }
    });
});

function GetKey(key)
{
    var output = null;
    
    keys.forEach(function(index)
    {
        if(index.keyCode == key)
        {
            output = index
        }
    });

    return output;
}

function updateKeyFrames()
{
    keys.forEach(function(index)
    {
        if(index.down)
        {
            index.framesDown++;
        }else
        {
            index.framesDown = 0;
        }

        if(index.up)
        {
            index.framesUp++;
        }else
        {
            index.framesUp = 0;
        }
    });
}