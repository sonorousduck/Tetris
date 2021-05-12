var myGameComponent;
var canvasHeight = Math.floor(window.screen.availHeight / 1.2);
var canvasWidth = canvasHeight * .70;
var sizeBoxWidth = canvasHeight / 40;
var sizeBoxHeight = canvasHeight / 40;
var movementSpeed = sizeBoxWidth;
var horizontalMovementSpeed = movementSpeed * .5
var xPos = 20;
var yPos = 20;







function startGame() {
    //myGameComponent = new component(sizeBoxWidth, sizeBoxHeight, "blue", xPos, yPos);
    myGameComponent = new LongSkinnyOne(sizeBoxWidth, sizeBoxHeight, xPos, yPos);
    myGameArea.start();
}


var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth; 
        this.canvas.height = canvasHeight; 
        this.context = this.canvas.getContext("2d");
        myGameComponent.setContext(this.context);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
   
        this.interval = setInterval(updateGameArea, 20);
    
        document.addEventListener('keydown', (e) => {
            if (e.key === 's' && myGameComponent.b + myGameComponent.height + movementSpeed < canvasHeight) {
                myGameComponent.b += movementSpeed;
            }
            
            if (e.key === 'd' && myGameComponent.a + horizontalMovementSpeed + myGameComponent.width < canvasWidth  && myGameComponent.b + myGameComponent.height + horizontalMovementSpeed < canvasHeight) {
                myGameComponent.a += horizontalMovementSpeed;
            }
            else if (e.key === 'a' && myGameComponent.a - horizontalMovementSpeed >= 0 && myGameComponent.b + myGameComponent.height + horizontalMovementSpeed < canvasHeight) {
                myGameComponent.a -= horizontalMovementSpeed;
            }

            // TODO: Make it kick back up if rotated out of bounds


            if (e.key === 'r' && myGameComponent.b + myGameComponent.height + horizontalMovementSpeed < canvasHeight  && myGameComponent.a + horizontalMovementSpeed + myGameComponent.height < canvasWidth && myGameComponent.b + myGameComponent.width + movementSpeed < canvasHeight)  {
                myGameComponent.rotate()

            }
        });

    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


class GameBoard {
    constructor() {
        for (int i = 0; i < 10; i++) {
            

        }



    }



}



class TetrisBoxComponent {
    constructor(width, height, color, a, b) {
        this.height = height;
        this.width = width * 5;
        this.color = color;
        this.a = a;
        this.b = b;
        this.context = null;
    }
}



class LongSkinnyOne {
    constructor(width, height, a, b) {
        this.height = height;
        this.width = width * 5;
        this.color = "green";
        this.a = a;
        this.b = b;
        this.context = null;
    }

    setContext(context) {
        this.context = context;

    }

    update() {
        this.context = myGameArea.context;
        this.context.fillStyle = this.color;
        this.context.fillRect(this.a, this.b, this.width, this.height);
        this.context.strokeStyle = "#000000";
        this.context.strokeRect(this.a, this.b, this.width, this.height);
    }

    rotate() {
        var temp = this.width;
        this.width = this.height;
        this.height = temp;
    }
}


function updateGameArea() {
    myGameArea.clear();
    if (myGameComponent.b + myGameComponent.height + movementSpeed * .1 <= canvasHeight) {
        myGameComponent.b += movementSpeed * .1;
    }

    myGameComponent.update();

}


