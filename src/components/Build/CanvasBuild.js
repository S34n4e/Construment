import React, { Component }	from 'react';
//import guitarra from "../../Multimedia/Guitarras.jpg";
//import mergeImages from 'merge-images';

var canvasStyle = {border: '1px solid #d3d3d3'};
var hideStyle = {display:'none'};
var x = 10;
var y = 10;

    var canvas;
    var ctx;
    var img;
    //var rand = 0;

function start() {
     canvas = document.getElementById("myCanvas");
     ctx = canvas.getContext("2d");
     img = document.getElementById("scream");
   ctx.drawImage(img, 0, 0);
   console.log("cargado");
};

function addImage() {
    ctx.drawImage(img, x, y);
    console.log("x" + x + " y" + y);
}

function upX(){
    x = x+20;
}

function upY(){
    y = y+20;
}

function downX(){
    x = x-20;
}

function downY(){
    y = y-20;
}
/*
function changeImage(){
    switch(rand){
        case 0: document.getElementById("scream").src="https://vignette.wikia.nocookie.net/finalfantasy/images/f/fe/PFF_Summoner_M.png/revision/latest/fixed-aspect-ratio-down/width/240/height/240?cb=20141104023447&fill=transparent"; 
        rand = 1;
        break;
        case 1: document.getElementById("scream").src="https://vignette.wikia.nocookie.net/finalfantasy/images/6/65/PFF_Blue_Chocobo.png/revision/latest/fixed-aspect-ratio-down/width/240/height/240?cb=20150531220011&fill=transparent"; 
        rand = 2;
        break;
        case 2: document.getElementById("scream").src="https://vignette.wikia.nocookie.net/finalfantasy/images/c/c2/PFF_Hunter_M.png/revision/latest/fixed-aspect-ratio-down/width/240/height/240?cb=20141104024711&fill=transparent"; 
        rand = 0;
        break;
        default:
            break;
    }
}
*/
class CanvasBuild extends Component {

componentDidMount() {
start();
//setInterval(changeImage, 5000);
}

    render(){
        return(
            <div>
                <canvas id="myCanvas" width="540" height="300" style={canvasStyle}>
                Your browser does not support the HTML5 canvas tag.
                </canvas>
                
                <img style={hideStyle} id="scream" width="200" height="200" src="https://vignette.wikia.nocookie.net/finalfantasy/images/c/c5/PFF_Edward_TAY.png/revision/latest/fixed-aspect-ratio-down/width/240/height/240?cb=20171007210511&fill=transparent" alt="The Scream"/>
                
                <br/>
                
                <button onClick={addImage}>Agregar</button>
                <button onClick={downX}>Izquierda</button>
                <button onClick={upX}>Derecha</button>
                <button onClick={downY}>Arriba</button>
                <button onClick={upY}>Abajo</button>
                
            </div>
        )//Fin del return    
    };
    
}//Fin de la clase

export default CanvasBuild;
