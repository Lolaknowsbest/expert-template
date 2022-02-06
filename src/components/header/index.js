
import React from "react";
import ReactDOM from "react-dom";
import {HashLink} from "react-router-hash-link";
import classes from "./header.module.scss";
import logo from "../../assets/logo.jpg";

function Header() {
    return (
    
        <header className={classes.header}> 
        <section> 
             <img src={logo} className={classes.logos}/>
        </section>
        <nav className={classes.nav} >  

           <ul>
            <li>
                SERVICES
            </li>
            <li>
                 DOCTORS
            </li>
            <li>
                CONTACT 
            </li>
            <li>
                 HOURS
            </li>
          </ul>
              
        
            
        </nav>     
         </header>
         
 
      
    )
}
export default Header; 