import React	from 'react';
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom";



export default () => (
  
 <div>
 <section id="banner">
 <div>
				<p>We are a page that is growing at small steps, please be patient, we're doing what we can</p>
				<ul className="actions">
					<li>
						<Link to="/build" className="button big">Build instrument now!</Link>
					</li>
				</ul>
				<br></br>
				<div className="container">
                <Carousel dynamicHeight>
                  <div>
                    <img alt="Smiley face" src="/images/img2.jpg" />
                    <kbd className="legend">Watch our tutorials </kbd>
                  </div>
                  <div>
                    <img alt="Smiley face" src="/images/img3.jpg" />
                    <kbd className="legend">Save it as image </kbd>
                  </div>
                  <div>
                    <img alt="Smiley face" src="/images/img4.jpg" />
                    <kbd className="legend">Customize as you can </kbd>
                  </div>
                  <div>
                    <img alt="Smiley face" src="/images/img1.jpg" />
                    <kbd className="legend">Start now! </kbd>
                  </div>
                  <div class="embed-container" >
                  <img alt="img" src="/images/img1.jpg"/>
                    <iframe title="Construment video" width="360" height="240" src="https://www.youtube.com/embed/d9QumoK2io4" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                  </div>
                </Carousel>
            </div>
  </div>
</section>       
 </div>
 

 
 
);
