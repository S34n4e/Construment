import React	from 'react';
import {Link} from "react-router-dom";
import LogoGuitarras from "../../Multimedia/guitar.png";
import LogoViolines from "../../Multimedia/violin.png";
import LogoBajos from "../../Multimedia/bass.png";
import LogoUkuleles from "../../Multimedia/ukulele.png";

const data = require('./data.json');

function isGuitar() {
    data.none.id = data.guitar.id;
    data.none.name = data.guitar.name;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

function isUkelele() {
    data.none.id = data.ukelele.id;
    data.none.name = data.ukelele.name;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

function isViolin() {
    data.none.id = data.violin.id;
    data.none.name = data.violin.name;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

function isBajo() {
    data.none.id = data.bajo.id;
    data.none.name = data.bajo.name;
     console.log("I got: " + data.none.id + " " + data.none.name);
}

export default () => (
    
<div className="container">
<div>
<br/><br/><br/>
<h1>Select an instrument</h1>

<div class="grid-container">
  <div class="item1">
    <li>
        <Link onClick={isGuitar} to="/buildEditor">
            <img src={LogoGuitarras} alt="prop" height="230" width="230"/>
            <br/><b>Guitar</b>
        </Link>
    </li>
  </div>
  
  <div class="item2"><li><Link onClick={isUkelele} to="/buildEditor">
  <img src={LogoUkuleles} alt="prop" height="230" width="230"/>
  <br/><b>Ukulele</b></Link></li></div>  

  <div class="item3"><li><Link onClick={isViolin} to="/buildEditor">
  <img src={LogoViolines} alt="prop" height="230" width="230"/>
  <br/><b>Violin</b></Link></li></div>

  <div class="item4"><li><Link onClick={isBajo} to="/buildEditor">
  <img src={LogoBajos} alt="prop" height="230" width="230"/>
  <br/><b>Bass</b></Link></li></div>  
</div>

</div>
</div>

);

