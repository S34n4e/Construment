import React, { Component } from 'react';
import Menu from './components/Menu';
import Footer from './components/footer';

import './components/toTop.css';
import ToTop from './components/toTop';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

import Main from './Main';
import AppRoutes3 from './routes2';

class App extends Component {

  render(){
   
    return(
      //Este div debe encerrar el resto para que react lo indentifique como un solo elemento.
      <div>
      
          {/*Contiene el encabezado de la aplicación*/}
          <div className="page-header">
              <Menu /> 
          </div>
       
          
          {/*Este div contiene el Carrusel*/}
          <div>
                {/*<AppRoutes3 />*/}
      	  </div>

          
          
          {/*Este div contiene las rutas hacia los demás módulos*/}
      		<section>
              <Main /> 
      	  </section>
       
          {/*Este div contiene el footer*/}
          <div className="page-footer">
              <Footer />
              <ToTop />
          </div>
      
      </div>
      
    );     
    
    
  }//Fin del render
  
}//Cierra la clase componente App

export default App

