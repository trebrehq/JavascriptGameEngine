class Key
{
    keyCode;
    down = false;
    up = false;
    framesDown = 0;
    framesUp = 0;

    constructor(keyCode)
    {
        this.keyCode = keyCode;
    }
}

class Sprite
{
    name = "bob";
    position = new Vector2(0, 0);
    size = new Vector2(50, 50);
    color = "black";
    behaviours = [];

    constructor(name, position, size)
    {
        this.name = name;
        this.position = position;
        this.size = size;
    }
    
    moveAndUpdate(magnitude)
    {
        this.position.x += magnitude.x;
        this.position.y += magnitude.y;

        updateCanvas();
    }

    static findWithName(target)
    {
        var output = null;
        
        sprites.forEach(function(index)
        {
            if(index.name == target)
            {
                output = index;
            }
        });

        return output;
    }

    addBehaviour(behaviour)
    {
        if(behaviour instanceof Behaviour)
        {
            behaviour.sprite = this;

            this.behaviours.length++;
            this.behaviours[this.behaviours.length - 1] = behaviour;
        }
    }
}

class Vector2
{
    x = 0;
    y = 0;

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    static add(a, b)
    {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static subtract(a, b)
    {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static multiply(a, b)
    {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    static divide(a, b)
    {
        return new Vector2(a.x / b.x, a.y / b.y);
    }
}

class Collision
{
    overall;
    x;
    y;
    other;
}

class Behaviour
{
    sprite;
    enabled = true;
    
    start(){}
    update(){}

    constructor(){}
}

class PhysicsBody extends Behaviour
{
    velocity = new Vector2(0, 0);
    gravityScale = 1;
    terminalVelocity = 20;

    update()
    {
        this.sprite.position.y += this.velocity.y;

        this.velocity = Vector2.add(this.velocity, new Vector2(0, this.gravityScale * 0.05));

        if(this.velocity.y >= this.terminalVelocity)
        {
            this.velocity.y = this.terminalVelocity;
        }

        
        
        if(this.sprite.position.y > canvas.height - this.sprite.size.y)
        {
            this.velocity.y *= -0.6;
            this.sprite.position.y = canvas.height - this.sprite.size.y;
        }
    }

    static calculateCollisionsAtPoint(point)
    {
        var output = new Collision();
        var outputCalculated = false;
        var xAxis;
        var yAxis;
        
        sprites.forEach(function(index)
        {
            if(!outputCalculated)
            {
                xAxis = index.position.x < point.x && index.position.x + index.size.x > point.x;
                yAxis = index.position.y < point.y && index.position.y + index.size.y > point.y;
            }

            if(xAxis && yAxis && !outputCalculated)
            {
                output.overall = xAxis && yAxis;
                output.x = xAxis;
                output.y = yAxis;
                output.other = index;
                outputCalculated = true;
            }
        });

        return output;
    }
}