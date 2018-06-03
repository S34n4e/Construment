import React	from 'react';
import Canvasbuild from "./CanvasBuild"

const data = require('./data.json');
const parts = require('./parts.json');
var image = parts.parts[2].src;

function showSomething() {
    console.log("A src: " + parts.parts[1].src);
    console.log("B src: " + image);
}

export default () => (

<div className="container">
<div className="row">
<div className="col">
<br/><br/><br/>
<h1>Edit your {data.none.name}</h1>

<details> Body<br/>
<button onClick={showSomething}>{parts.parts[1].src}</button><br/>
<button onClick={showSomething}>{image}</button><br/>
</details><br/>

<details> Neck<br/>
<button onClick={showSomething}>{parts.parts[1].src}</button><br/>
<button onClick={showSomething}>{image}</button><br/>
</details><br/>

<details> Peg<br/>
<button onClick={showSomething}>{parts.parts[1].src}</button><br/>
<button onClick={showSomething}>{image}</button><br/>
</details><br/>

<Canvasbuild/>

</div>
</div>

</div>

);