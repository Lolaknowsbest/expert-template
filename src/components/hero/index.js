import React from "react";
import ReactDOM from "react-dom";
import styles from "./hero.module.scss";
import Bhargava from "../../assets/Bhargava.jpg";


function Hero() {
    return (
        <div className={styles.heroBox} >
            <div className={styles.heroCard} >
                <img src={Bhargava} className={styles.heroImage} />
                <section className={styles.heroText} >
                    <h2>Hi, I am Dr Bhargava <span className={styles.wave}>👋🏾</span> </h2>
                    <p>I am an Ophthalmologist. I specialize in treating cornea and eye cataract diseases
                    </p>
                        <div className={styles.hire}>
                        
                            <button className={`${styles.button} ${styles.mobile}`} >PATIENT PORTAL</button>
                         
                         <a href="" download=""> 
                             <button className={styles.button} >BOOK APPOINTMENT</button>
                             </a> 
                        </div>
                </section>
            </div>
        </div>
    )
};

export default Hero;