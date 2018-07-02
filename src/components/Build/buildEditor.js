import React	from 'react';
import {Link} from "react-router-dom";
import Canvasbuild from "./CanvasBuild";

export default () => (
    

<section className="banner">
<div className="col-md-2">
<Link to="/build" className="button big">Go back</Link>
</div>
<div className="container">
<Canvasbuild/>
</div>
</section>
);