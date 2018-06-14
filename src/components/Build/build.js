import React	from 'react';
import {Link} from "react-router-dom";
import LogoGuitarras from "../../Multimedia/guitar.png";
import LogoViolines from "../../Multimedia/violin.png";
import LogoBajos from "../../Multimedia/bass.png";
import LogoUkuleles from "../../Multimedia/ukulele.png";
import "../../ResizeImagen.css";

const data = require('./data.json');

function isGuitar() {
    data.none.id = data.guitar.id;
    data.none.name = data.guitar.name;
    data.none.urlaudio = data.guitar.urlaudio;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

function isUkelele() {
    data.none.id = data.ukelele.id;
    data.none.name = data.ukelele.name;
    data.none.urlaudio = data.ukelele.urlaudio;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

function isViolin() {
    data.none.id = data.violin.id;
    data.none.name = data.violin.name;
    data.none.urlaudio = data.violin.urlaudio;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

function isBajo() {
    data.none.id = data.bajo.id;
    data.none.name = data.bajo.name;
    data.none.urlaudio = data.bajo.urlaudio;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

export default () => (

<section className="banner">
<div className="container">
<div>
<h1 className="onHover" >Select an instrument</h1>

<div className="container">
<div className="row">
  <div className="col">
    <li>
        <Link onClick={isGuitar} to="/buildEditor">
            <img className="item redondeaBordesPrebuider" src={LogoGuitarras} alt="prop" height="230" width="230"/>
            <br/>
        </Link>
    </li>
  </div>
  
  <div className="col"><li><Link onClick={isUkelele} to="/buildEditor">
  <img className="item redondeaBordesPrebuider" src={LogoUkuleles} alt="prop" height="230" width="230"/>
  <br/></Link></li></div>  
</div>

<div className="row">
  <div className="col"><li><Link onClick={isViolin} to="/buildEditor">
  <img className="item redondeaBordesPrebuider" src={LogoViolines} alt="prop" height="230" width="230"/>
  <br/></Link></li></div>

  <div className="col"><li><Link onClick={isBajo} to="/buildEditor">
  <img className="item redondeaBordesPrebuider" src={LogoBajos} alt="prop" height="230" width="230"/>
  <br/></Link></li></div>  
</div>
</div>
</div>
</div>
</section>

);

