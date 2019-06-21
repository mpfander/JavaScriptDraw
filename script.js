function myGround(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(0, 300, 800, 800);
        draw.closePath();
        draw.fill();
}

function myBuild(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(70, 180, 100, 600);
        draw.closePath();
        draw.fill();
}

function myBuildin(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(180, 140, 100, 700);
        draw.closePath();
        draw.fill();
}

function myBuilding(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(290, 160, 100, 700);
        draw.closePath();
        draw.fill();
}

function myBuilding2(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(400, 40, 100, 700);
        draw.closePath();
        draw.fill();
}

function myBuilding3(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(510, 70, 100, 700);
        draw.closePath();
        draw.fill();
}

function myBuilding4(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.fillStyle = "black";
        draw.fillRect(620, 130, 100, 700);
        draw.closePath();
        draw.fill();
}

function myRoof(){
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
        draw.beginPath();
        draw.moveTo(290,160);
        draw.lineTo(340,70);
        draw.lineTo(390,160);
        draw.fillStyle = "black";
        draw.fill();
}


function myRoof3() {
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d"); 
    draw.beginPath();
    draw.strokeStyle = "black";
    draw.arc(230, 140, 49, 0, Math.PI, true);
    draw.fillStyle = "black";
    draw.fill();
    draw.stroke();
}

function myRoof4() {
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d"); 
    draw.beginPath();
    draw.strokeStyle = "black";
    draw.arc(560, 70, 49, 0, Math.PI, true);
    draw.arc(560, 70, 39, 0, Math.PI, true);
    draw.arc(560, 70, 29, 0, Math.PI, true);
    draw.arc(560, 70, 19, 0, Math.PI, true);
    draw.lineTo(600, 41);
    draw.lineTo(520, 41);
    draw.lineTo(600, 80);
    draw.lineTo(560, 80);
    draw.lineTo(560, 22);
    draw.stroke();
}
function myText(){
var canvas = document.getElementById("mycanvas");
var draw = canvas.getContext("2d");
    draw.font = "15px Arial";
    draw.fillStyle = "lightblue";
    draw.fillText("P N C", 320, 150);
}

function myText2(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
        draw.font = "15px Arial";
        draw.fillStyle = "red";
        draw.fillText("Great", 540, 90);
        draw.fillText("American", 530, 110);
    }

function myText3(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
        draw.font = "15px Arial";
        draw.fillStyle = "white";
        draw.fillText("Carew", 430, 80);
        draw.fillText("Tower", 430, 100);
     }    

function myText4(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
        draw.font = "15px Arial";
        draw.fillStyle = "yellow";
        draw.fillText("Scripps", 205, 140);
        draw.fillText("Center", 208, 160);
    }    

function myText5(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
        draw.font = "15px Arial";
        draw.fillStyle = "grey";
        draw.fillText("Fifth", 645, 160);
        draw.fillText("Third", 645, 180);
        draw.fillText("Center", 645, 200);
    }    

function myText6(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
        draw.font = "15px Arial";
        draw.fillStyle = "orange";
        draw.fillText("Center at", 85, 210);
        draw.fillText("600 Vine", 89, 230);
    }     

function bodyLoad() {
    myGround();
    myBuild();
    myBuildin();
    myBuilding();
    myBuilding2();
    myBuilding3();
    myBuilding4();
    myRoof();
    myRoof3();
    myRoof4();
    myText();
    myText2();
    myText3();
    myText4();
    myText5();
    myText6();
}