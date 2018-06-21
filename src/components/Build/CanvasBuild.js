import React, { Component }	from 'react';

const data = require('./data.json'); const parts = require('./parts.json');
var acc = document.getElementsByClassName("accordion"); var i; var hideStyle = {display:'none'};
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
    imgBody = document.getElementById("imgBody");
    imgNeck = document.getElementById("imgNeck");
    imgPeg = document.getElementById("imgPeg");
   leftPanel();
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
}

function elements() {
    if(data.none.name === "guitar" || data.none.name === "none"){
    indentsBody.push(<img alt="body" src={parts.parts[1].src} width="106" height="74" onClick={function(event){changeImg(1, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[2].src} width="106" height="74" onClick={function(event){changeImg(2, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[3].src} width="106" height="74" onClick={function(event){changeImg(3, "body")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[4].src} width="90" height="30" onClick={function(event){changeImg(4, "neck")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[5].src} width="80" height="40" onClick={function(event){changeImg(5, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[6].src} width="80" height="40" onClick={function(event){changeImg(6, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[7].src} width="80" height="40" onClick={function(event){changeImg(7, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[8].src} width="80" height="40" onClick={function(event){changeImg(8, "peg")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[9].src} width="90" height="30" onClick={function(event){changeImg(9, "neck")}}></img>);
    }
}

    function startKonva(){
    var count = 1;
    var stage;
    function drawImage(imageObj, lastimg) {
            stage = new window.Konva.Stage({
            container: 'container',
            width: Math.max(window.innerWidth/2, 290),
            height: Math.max(window.innerHeight/2, 400)
        });

        var layer = new window.Konva.Layer();
        // darth vader
        var bodyImg2 = new window.Konva.Image({
            image: imgBody,
            x: 300,
            y: stage.getHeight() / 2 - imgBody.height / 4,
            width: imgBody.width/2,
            height: imgBody.height/2,
            draggable: true
        });
        // add cursor styling
        bodyImg2.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
        });
        bodyImg2.on('mouseout', function() {
            document.body.style.cursor = 'default';
        });
        var neckImg2 = new window.Konva.Image({
            image: imgNeck,
            x: 170,
            y: stage.getHeight() / 2 - imgNeck.height / 4,
            width: imgNeck.width/2,
            height: imgNeck.height/2,
            draggable: true
        });
        // add cursor styling
        neckImg2.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
        });
        neckImg2.on('mouseout', function() {
            document.body.style.cursor = 'default';
        });
        var pegImg2 = new window.Konva.Image({
            image: imgPeg,
            x: 110,
            y: stage.getHeight() / 2 - imgPeg.height / 4,
            width: imgPeg.width/2,
            height: imgPeg.height/2,
            draggable: true
        });
        // add cursor styling
        pegImg2.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
        });
        pegImg2.on('mouseout', function() {
            document.body.style.cursor = 'default';
        });

        /*Activa los filtros de color*/
        bodyImg2.cache();
        neckImg2.cache();
        pegImg2.cache();
        bodyImg2.filters([window.Konva.Filters.HSV]);
        neckImg2.filters([window.Konva.Filters.HSV]);
        pegImg2.filters([window.Konva.Filters.HSV]);

        layer.add(bodyImg2);
        layer.add(neckImg2);
        layer.add(pegImg2);
        stage.add(layer);
        
            /*Guarda la imagen a local*/
        function downloadURI(uri, name) {
            var link = document.createElement("a");
            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        if(count === 3){
        document.getElementById('btn-download').addEventListener('click', function () {
            var dataURL = stage.toDataURL();
            downloadURI(dataURL, 'construment-instrument.png');
        }, false);
        
        document.getElementById('changeBody').addEventListener('click', function () {
            imageObj3.src = imgBody.src;
        }, false);
        document.getElementById('changeNeck').addEventListener('click', function () {
            imageObj2.src = imgNeck.src;
        }, false);
        document.getElementById('changePeg').addEventListener('click', function () {
            imageObj1.src = imgPeg.src;
        }, false);
         count = count+1;
        } else {
            count = count+1;
        }
        
        /*Asigna los cambios de color a las barras de desplazamiento*/
        var sliders = ['hue', 'saturation', 'value'];
        sliders.forEach(function (attr) {
          var slider = document.getElementById(attr);
          function update() {
            bodyImg2[attr](parseFloat(slider.value));
            neckImg2[attr](parseFloat(slider.value));
            pegImg2[attr](parseFloat(slider.value));
            layer.batchDraw();
          }
          slider.oninput = update;
          update();
        });
    }
    
    var imageObj1 = new window.Image();
    var imageObj2 = new window.Image();
    var imageObj3 = new window.Image();
    
    imageObj1.onload = function() {
        drawImage(this, false);  
    };
    imageObj2.onload = function() {
        drawImage(this, false);  
    };
    imageObj3.onload = function() {
        drawImage(this, false);  
    };
    
    
    imageObj1.src = imgPeg.src;
    imageObj2.src = imgNeck.src;
    imageObj3.src = imgBody.src;
        
    }


class CanvasBuild extends Component {
componentDidMount() {
    start();
    clearContent();
    startKonva();
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
                <i className="fa fa-chevron-down"></i> Body</button>
                <div id="changeBody" className="panel">

                {indentsBody}

                </div>
                <button className="accordion">
                <i className="fa fa-chevron-down"></i> Neck</button>
                <div id="changeNeck" className="panel">

                {indentsNeck}

                </div>
                <button className="accordion">
                <i className="fa fa-chevron-down"></i> Peg</button>
                <div id="changePeg" className="panel">

                {indentsPeg}

                </div>
                <button id="btn-download" className="accordion"><i className="fa fa-download"></i> Download</button>
                <div className="panel">
                </div>
                <button onClick={()=>{audioinstrumento()}} className="accordion" > <i className="fa fa-music"></i> Play {data.none.name}</button>
                <div className="panel">
                </div>
            </div>

            <div className="col-xs-12 col-md-7 ">
            <div id="container" className="awa"></div>
            <div id="controls">
                Hue:
                <input id="hue" type="range" min="0" max="259" step="1" defaultValue="0"/> Saturation:
                <input id="saturation" type="range" min="-2" max="10" step="0.5" defaultValue="0"/> Lightness:
                <input id="value" type="range" min="-2" max="2" step="0.1" defaultValue="0"/>
            </div>
            </div>
                <img style={hideStyle} id="imgBody" src={parts.parts[1].src} alt="The Scream"/>
                <img style={hideStyle} id="imgNeck" src={parts.parts[4].src} alt="The Scream"/>
                <img style={hideStyle} id="imgPeg" src={parts.parts[5].src} alt="The Scream"/>
            </div>
        </div>
        )//Fin del return
    };

}//Fin de la clase

export default CanvasBuild;
