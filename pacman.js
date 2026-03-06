let board;
let context;
const rowCount = 21;
const columnCount = 19
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount*tileSize;


let blueGhostImg;
let orangeGhostImg;
let pinkGhostImg;
let redGhostImg;

let pacmanUpImg;
let pacmanDownImg;
let pacmanRightImg;
let pacmanLeftImg;


window.onload = function(){
    board = document.getElementById("board")
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext("2d")

    loadImage()
    loadMap()
    // console.log(walls.size)
}


function loadImage(){
    wallImage = new Image();
    wallImage.src = "./assets/wall.png";

    blueGhostImg = new Image();
    blueGhostImg.src = "./assets/blueGhost.png";

    orangeGhostImg = new Image();
    orangeGhostImg.src = "./assets/orangeGhost.png";

    pinkGhostImg = new Image();
    pinkGhostImg.src = "./assets/pinkGhost.png";

    redGhostImg = new Image();
    redGhostImg.src = "./assets/redGhost.png";



    pacmanDownImg = new Image()
    pacmanDownImg.src="./assets/pacmanDown.png"
    
    pacmanUpImg = new Image()
    pacmanUpImg.src="./assets/pacmanUp.png"

    pacmanLeftImg = new Image()
    pacmanLeftImg.src="./assets/pacmanLeft.png"

    pacmanRightImg = new Image()
    pacmanRightImg.src="./assets/pacmanRight.png"
}

function loadMap(){
    walls.clear()
    foods.clear()
    ghosts.clear()
    for( let r = 0; r<rowCount;r++){
        for(let c=0;c<columnCount; c++){
            const row = tileMap[r]
            const tileMapChar = row[c]

            const x = c*tileSize;
            const y = r*tileSize;

            if(tileMapChar=="X"){
                const wall = new Block(wallImage, x, y, tileSize, tileSize)
                walls.add(wall)
            }else if(tileMapChar=="b"){
                const ghost = new Block(blueGhostImg, x, y, tileSize, tileSize)
                ghosts.add(ghost)
            }else if(tileMapChar=="r"){
                const ghost = new Block(redGhostImg, x, y, tileSize, tileSize)
                ghosts.add(ghost)
            }else if(tileMapChar=="o"){
                const ghost = new Block(orangeGhostImg, x, y, tileSize, tileSize)
                ghosts.add(ghost)
            }else if(tileMapChar=="p"){
                const ghost = new Block(pinkGhostImg, x, y, tileSize, tileSize)
                ghosts.add(ghost)
            }else if(tileMapChar=="P"){
                const pacman = new Block(pacmanRightImg, x, y, tileSize, tileSize)
            }else if(tileMapChar==" "){
                const food = new Block(null, x+14, y+14, 4, 4)
                foods.add(food)
            }

        }
    }
}


//x=wall,    o=skip,    p=pacman,   " "=food(if functionality added)
//b=blueghost   r=redghost      p=pinkghost        o=orangeghost
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

const walls = new Set();
const foods = new Set()
const ghosts = new Set()
let pacman;



class Block {
    constructor(image, x, y, width, height){
        this.image = image
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.startX = x
        this.startY = y
    }
}