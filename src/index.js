import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
 /*La etiqueta Router se utiliza para poder redireccionarse a otras páginas del mismo sitio
     Nótese que las mismas surgen de BrowserRouter el cual está declarado en los import de este archivo
     al cual se le asignó el alias Router.
     En caso de tener problemas con los móviles se puede instalar react-router-native*/
    <Router>
      <App />
    </Router>, document.getElementById('root'));
    
registerServiceWorker();
