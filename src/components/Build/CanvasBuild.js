import React, { Component }	from 'react';
//import guitarra from "../../Multimedia/Guitarras.jpg";
//import mergeImages from 'merge-images';

const data = require('./data.json'); const parts = require('./parts.json');
var acc = document.getElementsByClassName("accordion"); var i;
var canvasStyle = {border: '1px solid #d3d3d3'}; var hideStyle = {display:'none'}; 
var x1 = 137; var y1 = 180;
var x2 = 200; var y2 = 40;
var x3 = 200; var y3 = 0;
var canvas; var ctx; 
var partEditing = "body";
var imgBody; var imgNeck; var imgPeg; var indentsBody = []; var indentsNeck = []; var indentsPeg = [];


function leftPanel(){
    acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
}

function audioinstrumento(){
    /*Función para reproducir el audio de los instrumentos, los lee de data.json*/
     var audio;
     audio = new Audio(data.none.urlaudio);
     audio.play();
}

function clearContent(){
    indentsBody = [];  indentsNeck = [];  indentsPeg = [];
}

function start() {
     canvas = document.getElementById("myCanvas");
     ctx = canvas.getContext("2d");
     imgBody = document.getElementById("imgBody");
     imgNeck = document.getElementById("imgNeck");
     imgPeg = document.getElementById("imgPeg");
        if (canvas.getContext) {
          ctx = canvas.getContext("2d");
          window.addEventListener('resize', resizeCanvas, false);
          window.addEventListener('orientationchange', resizeCanvas, false);
          resizeCanvas();
        x1 = canvas.width/2 - imgBody.naturalWidth/4;
        x2 = canvas.width/2 - imgNeck.naturalWidth/4;
        x3 = canvas.width/2 - imgPeg.naturalWidth/4;
          ctx.drawImage(imgBody, x1, y1, imgBody.naturalWidth/2, imgBody.naturalHeight/2);
          ctx.drawImage(imgNeck, x2, y2, imgNeck.naturalWidth/2, imgNeck.naturalHeight/2);
          ctx.drawImage(imgPeg, x3, y3, imgPeg.naturalWidth/2, imgPeg.naturalHeight/2);
            
        }
   console.log("cargado");
   leftPanel();
};

function resizeCanvas() {
        canvas.width = Math.max(window.innerWidth/2, 290);
        canvas.height = Math.max(window.innerHeight/2, 400);
        x1 = canvas.width/2 - imgBody.naturalWidth/4;
            x2 = canvas.width/2 - imgNeck.naturalWidth/4;
            x3 = canvas.width/2 - imgPeg.naturalWidth/4;
        addImage();
      }

function changePart(){
    if(partEditing === "body") {
        partEditing = "neck";
    } else if (partEditing === "neck") {
        partEditing = "peg";
    } else if (partEditing === "peg") {
        partEditing = "body";
    }
    document.getElementById("editChange").textContent = "Move: " + partEditing;
}

function addImage() {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgBody, x1, y1, imgBody.naturalWidth/2, imgBody.naturalHeight/2);
    ctx.drawImage(imgNeck, x2, y2, imgNeck.naturalWidth/2, imgNeck.naturalHeight/2);
    ctx.drawImage(imgPeg, x3, y3, imgPeg.naturalWidth/2, imgPeg.naturalHeight/2);
}

function upX(){
    switch(partEditing){
        case "body":
            x1 = x1+1;
            break;
        case "neck":
            x2 = x2+1;
            break;
        case "peg":
            x3 = x3+1;
            break;
        default:
            break;
    }
    addImage();
}

function upY(){
    switch(partEditing){
        case "body":
            y1 = y1+1;
            break;
        case "neck":
            y2 = y2+1;
            break;
        case "peg":
            y3 = y3+1;
            break;
        default:
            break;
    }
    addImage();
}

function downX(){
    switch(partEditing){
        case "body":
            x1 = x1-1;
            break;
        case "neck":
            x2 = x2-1;
            break;
        case "peg":
            x3 = x3-1;
            break;
        default:
            break;
    }
    addImage();
}

function downY(){
    switch(partEditing){
        case "body":
            y1 = y1-1;
            break;
        case "neck":
            y2 = y2-1;
            break;
        case "peg":
            y3 = y3-1;
            break;
        default:
            break;
    }
    addImage();
}

function changeImg(num, instrum){
    switch(instrum){
        case "body":
            document.getElementById("imgBody").src=parts.parts[num].src;
            break;
        case "neck":
            document.getElementById("imgNeck").src=parts.parts[num].src;
            break;
        case "peg":
            document.getElementById("imgPeg").src=parts.parts[num].src;
            break;
        default:
            break;
    }
    addImage();
}

function elements() {
    
    if(data.none.name === "guitar" || data.none.name === "none"){
    indentsBody.push(<img alt="body" src={parts.parts[1].src} width="74" height="106" onClick={function(event){changeImg(1, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[2].src} width="74" height="106" onClick={function(event){changeImg(2, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[3].src} width="74" height="106" onClick={function(event){changeImg(3, "body")}}></img>);
    
    indentsNeck.push(<img alt="neck" src={parts.parts[4].src} width="30" height="90" onClick={function(event){changeImg(4, "neck")}}></img>)
    
    indentsPeg.push(<img alt="peg" src={parts.parts[5].src} width="40" height="80" onClick={function(event){changeImg(5, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[6].src} width="40" height="80" onClick={function(event){changeImg(6, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[7].src} width="40" height="80" onClick={function(event){changeImg(7, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[8].src} width="40" height="80" onClick={function(event){changeImg(8, "peg")}}></img>);
    console.log("indents");
    }
}

function downloadImage(){
    var button = document.getElementById('btn-download');
    button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
}

class CanvasBuild extends Component {
componentDidMount() {
    start();
    downloadImage();
    clearContent();
}

componentWillMount() {
    elements();
}

    render(){
        return(

        <div>
        <h1>Build {data.none.name}</h1>
            <div className="row">
            <div className="col-xs-12 col-md-5">
                <button className="accordion">
                <i class="fa fa-chevron-circle-down"></i> Body</button>
                <div className="panel">
                
                {indentsBody}
                
                </div>
                <button className="accordion">
                <i class="fa fa-chevron-circle-down"></i> Neck</button>
                <div className="panel">
                
                {indentsNeck}
                
                </div>
                <button className="accordion">
                <i class="fa fa-chevron-circle-down"></i> Peg</button>
                <div className="panel">
                
                {indentsPeg}
                
                </div>
                <a href="" id="btn-download" download="instrument-construment.png"><button className="accordion"><i class="fa fa-floppy-o"></i> Download</button>
                <div className="panel">
                </div>
                </a>
            </div>

            <div className="col-xs-12 col-md-7">

                
                <canvas id="myCanvas" width="505" height="280" style={canvasStyle}> </canvas>
                <img style={hideStyle} id="imgBody" width="50%" height="50%" src={parts.parts[1].src} alt="The Scream"/>
                <img style={hideStyle} id="imgNeck" width="50%" height="50%" src={parts.parts[4].src} alt="The Scream"/>
                <img style={hideStyle} id="imgPeg" width="50%" height="50%" src={parts.parts[5].src} alt="The Scream"/>
                
                <br/>
                    <div class="btn-group">
                    <button onClick={()=>{audioinstrumento()}} type="button" class="btn btn-dark"><i class="fa fa-music"></i> Play {data.none.name}</button>
                    <button className="btn btn-success" onClick={downX} onMouseUp={addImage}><i class="fa fa-chevron-left"></i></button>
                    <button className="btn btn-success" onClick={downY} onMouseUp={addImage}><i class="fa fa-chevron-up"></i></button>
                    <button className="btn btn-success" onClick={upY} onMouseUp={addImage}><i class="fa fa-chevron-down"></i></button>
                    <button className="btn btn-success" onClick={upX} onMouseUp={addImage}><i class="fa fa-chevron-right"></i></button>
                    <button id="editChange" className="btn btn-default" onClick={changePart}>Move: {partEditing}</button>
                    </div>
            </div>
            </div>

        </div>
        )//Fin del return
    };

}//Fin de la clase

export default CanvasBuild;
