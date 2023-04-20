var canvas = document.getElementById("myCanvas");
var canvas_context = canvas.getContext("2d");

var sprites = 
[
    new Sprite("square1", new Vector2(0, 0), new Vector2(50, 50)), 
    new Sprite("square2", new Vector2(60, 10), new Vector2(50, 50)),
    new Sprite("square3", new Vector2(120, 20), new Vector2(50, 50))
];

function paintRectangleAt(position_x, position_y, size_x, size_y, color)
{
    canvas_context.fillStyle = color;
    
    canvas_context.fillRect(position_x, position_y, size_x, size_y);
}

function updateCanvas()
{
    canvas_context.clearRect(0, 0, canvas.width, canvas.height);

    paintRectangleAt(0, 0, canvas.width, canvas.height, "white");
    
    sprites.forEach(function(sprite)
    {
        paintRectangleAt(sprite.position.x, sprite.position.y, sprite.size.x, sprite.size.y, sprite.color);
    });
}

function addSpriteAndUpdate(newSprite)
{
    sprites.length++;
    sprites[sprites.length - 1] = newSprite;
    updateCanvas();
}

updateCanvas();