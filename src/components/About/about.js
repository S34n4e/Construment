import React, {Component} from 'react';
import logoReact from "../../Multimedia/Logos/logoReact.svg";
import "../../ResizeImagen.css";

class index  extends Component{
    
    render(){
        
        return(
            
            <div className="wrapper w3-theme-l5">

            
                <div className="w3-container w3-padding-64 w3-theme-l5">
                  <div className="w3-row">
                    <div className="w3-col m5 mt-5 ml-5">
                    <div className="w3-padding-16"><span className="w3-xlarge w3-border-teal w3-bottombar">About Construment</span></div>
                
                      <h3>Tool</h3>
                      <p>
                          Software for the personification enthusiasts<br/>
                          Developed with React and NodeJS
                      </p>
                      
                      <h2>Developers</h2>
                      <p>
                            Sean Alarcón<br/>
                            Luis Arias<br/>
                            Allan Zúñiga
                      </p>
                      
                    </div>
                    <div class="w3-col m5 mt-4">
                     <img src={logoReact} className="logoreactAbout" alt="logoReact"/>
                
                    </div>
                  </div>
                </div>            
            
            </div>
        )
        
    };//Fin del render
}//Fin del componente

export default index;