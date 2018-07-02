import React	from 'react';
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom";





  



export default () => (

      
      <div>
      <section className="banner">
      <br/>
      <h1>Tutorial</h1>
      <div className="container">
      <div className="row">
      <div className="col">
      
                <Carousel >
                  <div className="embed-container" >
                  <img alt="img" src="/images/miniaturatutorial.png"/>
                    <iframe title="Construment video" width="360" height="240" src="https://www.youtube.com/embed/s16gsNjqxhg?rel=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                
                  </div>
                 {/* <div className="embed-container" >
                  <img alt="img" src="https://i.ytimg.com/vi/uynLRBLMkd0/maxresdefault.jpg"/>
                    <iframe title="Construment video" width="360" height="240" src="https://www.youtube.com/embed/d9QumoK2io4" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                  </div>
                  <div className="embed-container" >
                  <img alt="img" src="https://i.ytimg.com/vi/uynLRBLMkd0/maxresdefault.jpg"/>
                    <iframe title="Construment video" width="360" height="240" src="https://www.youtube.com/embed/d9QumoK2io4" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                  </div>*/}
                </Carousel>
                
                </div>
                </div>
                <div className="row">
                <div className="col">
                                  <ul class="actions"><li><Link to="/build" class="button big">Build instrument now!</Link></li></ul>
                </div>
                </div>
                
              
      </div>
      </section>
      </div>
      
      
);