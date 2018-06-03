import React from "react";
import {Link} from "react-router-dom"
import logoletras from "../Multimedia/Logos/Logo_Menu_letras.svg";
import "../ResizeImagen.css"
import "./Menu.css";

export default () => (
	
	 
			<header id="header">
				<div className="FondoMenu">
					{/*<img src={logo} className="guitarralogomenu" alt="Logo_Menu"/>*/}				
					<Link to="/"><img src={logoletras} className="guitarralogomenuletras mt-2 ml-2" alt="Logo_Menu_letras"/></Link>				
					<nav id="nav">
						<ul>
							<li><Link to="/">        Home       </Link></li>
							{/*<li><Link to="/build">   Build      </Link></li>
							<li><Link to="/gallery"> Gallery    </Link></li>
							<li><Link to="/tutorial">        Tutorial   </Link></li>*/}{/*No esta asignado por falta de creación*/}
							{/*<li><Link to="/contact"> Contact us </Link></li>*/}
							<li><Link to="/about">   About      </Link></li>
						</ul>
					</nav>
				</div>
			</header>
			
);