import React, { Component }	from 'react';

const data = require('./data.json'); const parts = require('./parts.json');
var acc = document.getElementsByClassName("accordion"); var i; var hideStyle = {display:'none'}; 
var priceBody = 0; var priceNeck = 0; var pricePeg = 0; var price = 0;
var imgBody; var imgNeck; var imgPeg; var sound; var indentsBody = []; var indentsNeck = []; var indentsPeg = [];


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
var audio = new Audio(parts.parts[1].urlaudio);
function audioinstrumento(num){
    /*Función para reproducir el audio de los instrumentos, los lee de data.json*/
    audio.pause();
    audio.currentTime = 0;
     audio = new Audio(parts.parts[num].urlaudio);
     audio.play();
}

function clearContent(){
    indentsBody = [];  indentsNeck = [];  indentsPeg = [];
}

function start() {
    switch(data.none.name){
        case "guitar":
            changeImg(1, "body");
            changeImg(4, "neck");
            changeImg(5, "peg");
            break;
        case "ukulele":
            changeImg(13, "body");
            changeImg(16, "neck");
            changeImg(19, "peg");            
            break;
        case "violin":
            changeImg(10, "body");
            changeImg(11, "neck");
            changeImg(12, "peg");
            break;
        case "bass":
            changeImg(22, "body");
            changeImg(25, "neck");
            changeImg(28, "peg");
            break;
        default:
            break;
    }
    imgBody = document.getElementById("imgBody");
    imgNeck = document.getElementById("imgNeck");
    imgPeg = document.getElementById("imgPeg");
   leftPanel();
}

function changeImg(num, instrum){
    switch(instrum){
        case "body":
            document.getElementById("imgBody").src=parts.parts[num].src;
            priceBody = parts.parts[num].price;
            sound=num;
            break;
        case "neck":
            document.getElementById("imgNeck").src=parts.parts[num].src;
            priceNeck = parts.parts[num].price;
            break;
        case "peg":
            document.getElementById("imgPeg").src=parts.parts[num].src;
            pricePeg = parts.parts[num].price;
            break;
        default:
            break;
    }
    setPrice(num);
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
    if(data.none.name === "violin") {
    indentsBody.push(<img alt="body" src={parts.parts[10].src} width="106" height="74" onClick={function(event){changeImg(10, "body")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[11].src} width="90" height="30" onClick={function(event){changeImg(11, "neck")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[12].src} width="80" height="40" onClick={function(event){changeImg(12, "peg")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[31].src} width="106" height="74" onClick={function(event){changeImg(31, "body")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[32].src} width="80" height="40" onClick={function(event){changeImg(32, "peg")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[33].src} width="80" height="40" onClick={function(event){changeImg(33, "body")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[34].src} width="106" height="74" onClick={function(event){changeImg(34, "neck")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[35].src} width="80" height="40" onClick={function(event){changeImg(35, "peg")}}></img>);
    }
    
    if(data.none.name === "ukulele") {
    indentsBody.push(<img alt="body" src={parts.parts[13].src} width="106" height="74" onClick={function(event){changeImg(13, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[14].src} width="106" height="74" onClick={function(event){changeImg(14, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[15].src} width="106" height="74" onClick={function(event){changeImg(15, "body")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[16].src} width="90" height="30" onClick={function(event){changeImg(16, "neck")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[17].src} width="90" height="30" onClick={function(event){changeImg(17, "neck")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[18].src} width="90" height="30" onClick={function(event){changeImg(18, "neck")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[19].src} width="80" height="40" onClick={function(event){changeImg(19, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[20].src} width="80" height="40" onClick={function(event){changeImg(20, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[21].src} width="80" height="40" onClick={function(event){changeImg(21, "peg")}}></img>);
    }
    
    if(data.none.name === "bass") {
    indentsBody.push(<img alt="body" src={parts.parts[22].src} width="106" height="74" onClick={function(event){changeImg(22, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[23].src} width="106" height="74" onClick={function(event){changeImg(23, "body")}}></img>);
    indentsBody.push(<img alt="body" src={parts.parts[24].src} width="106" height="74" onClick={function(event){changeImg(24, "body")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[25].src} width="90" height="30" onClick={function(event){changeImg(25, "neck")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[26].src} width="90" height="30" onClick={function(event){changeImg(26, "neck")}}></img>);
    indentsNeck.push(<img alt="neck" src={parts.parts[27].src} width="90" height="30" onClick={function(event){changeImg(27, "neck")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[28].src} width="80" height="40" onClick={function(event){changeImg(28, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[29].src} width="80" height="40" onClick={function(event){changeImg(29, "peg")}}></img>);
    indentsPeg.push(<img alt="peg" src={parts.parts[30].src} width="80" height="40" onClick={function(event){changeImg(30, "peg")}}></img>);
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
            x: 240,
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
            x: 110,
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
            x: 50,
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
    
    function setPrice(num){
        price = priceBody + priceNeck + pricePeg;
        document.getElementById("p1").innerHTML = "Body $" + priceBody;
        document.getElementById("p2").innerHTML = "Neck $" + priceNeck;
        document.getElementById("p3").innerHTML = "Peg $" + pricePeg;
        document.getElementById("p4").innerHTML = "Total $" + price;
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
                <button onClick={()=>{audioinstrumento(sound)}} className="accordion" > <i className="fa fa-music"></i> Play {data.none.name}</button>
                <div className="panel">
                </div>
                <kbd id="p1">Price:</kbd>
                <kbd id="p2">Price:</kbd>
                <kbd id="p3">Price:</kbd>
                <kbd id="p4">Price:</kbd>
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
