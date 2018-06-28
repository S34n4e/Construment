import React	from 'react';
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom";



export default () => (
  
 <div>
 <section className="banner">
 <div>
				<h1>With Construment...</h1> 
				<p>you can customize instruments by changing their parts and color!</p>
				<ul className="actions">
					<li>
						<Link to="/build" className="button big">Build instrument now!</Link>
					</li>
				</ul>
				<br></br>
				<div className="container">
                <Carousel dynamicHeight>
                  <div>
                    <img alt="construment guitar" src="/images/img2.jpg" />
                    <kbd className="legend">Watch our tutorials </kbd>
                  </div>
                  <div>
                    <img alt="construment customization" src="/images/img3.jpg" />
                    <kbd className="legend">Save it as image </kbd>
                  </div>
                  <div>
                    <img alt="construment colors" src="/images/img4.jpg" />
                    <kbd className="legend">Customize as you can </kbd>
                  </div>
                  <div>
                    <img alt="construment designs" src="/images/img1.jpg" />
                    <kbd className="legend">Start now! </kbd>
                  </div>
                  <div class="embed-container" >
                  <img alt="construment tutorial video instrument" src="/images/img1.jpg"/>
                    <iframe title="Construment video" width="360" height="240" src="https://www.youtube.com/embed/d9QumoK2io4" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                  </div>
                </Carousel>
            </div>
  </div>
</section>
 </div>
 

 
 
);
