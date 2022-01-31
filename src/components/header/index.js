
import React from "react";
import ReactDOM from "react-dom";
import {HashLink} from "react-router-hash-link";
import classes from "./header.module.scss";

function Header() {
    return (
    
        <header className={classes.header}> 
        <div> 
            
         <h1 className={classes.h1}>DR. ANUJ BHARGAVA</h1>
             
        </div>
        <nav className={classes.nav} >  

           <ul>
            <li>
                SERVICES
            </li>
            <li>
                TESTIMONIALS
            </li>
          </ul>
              
            <button className={classes.button}>
               MEET OUR STAFF
            </button>
            
        </nav>     
         </header>
         
 
      
    )
}
export default Header; 