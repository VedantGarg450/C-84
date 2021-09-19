var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var rover_x= 100;
var rover_y= 100;
var rover_image= "rover.png";
var background_image= "mars.jpg";
function add_image(){
    background_imge_add= new Image();
    background_imge_add.onload= uploadBackground;
    background_imge_add.src= background_image;
    rover_imge_add= new Image();
    rover_imge_add.onload= uploadRover;
    rover_imge_add.src= rover_image;
}
function uploadBackground(){
     ctx.drawImage(background_imge_add, 0, 0, 1500, 1500);
}
function uploadRover(){
    ctx.drawImage(rover_imge_add, 100, 100, 70, 70);
}