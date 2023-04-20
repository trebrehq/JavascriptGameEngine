var frameRate = 30;

function updateProgram()
{
    sprites.forEach(function(sprite)
    {
        sprite.behaviours.forEach(function(behaviour)
        {
            if(behaviour.enabled)
            {
                behaviour.update();
            }
        });
    });

    updateCanvas();
    updateKeyFrames();
}

setInterval(updateProgram, 1 / frameRate);
sprites.forEach(function(sprite)
{
    sprite.behaviours.forEach(function(behaviour)
    {
        if(behaviour.enabled)
        {
            behaviour.start();
        }
    });
});

// Sprite.findWithName("square1").addBehaviour(new PhysicsBody);
// Sprite.findWithName("square2").addBehaviour(new PhysicsBody);
// Sprite.findWithName("square3").addBehaviour(new PhysicsBody);