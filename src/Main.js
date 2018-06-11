import React from 'react';
import {Switch, Route} from "react-router-dom";

//components

//import Home from './components/Home/home.js';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import Face from './components/Home/faceCom.js';
import Build from './components/Build/build.js';
import BuildEditor from './components/Build/buildEditor.js';
import Gallery from './components/Gallery/gallery.js';
import Tutorial from './components/Tutorial/tutorial.js';


const Main = () => (
        <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Face} />
            <Route exact path="/about" component={About} />
            
            <Route exact path="/build" component={Build} />
            <Route exact path="/buildEditor" component={BuildEditor} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/tutorial" component={Tutorial}/>
        </Switch>

);
export default Main;

