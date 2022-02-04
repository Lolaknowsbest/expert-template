import React from "react";
import ReactDOM from "react-dom";
import styles from "./hero.module.scss";
import Crawford from "../../assets/Crawford.jpg";


function Hero() {
    return (
        <div className={styles.heroBox} >
            <div className={styles.heroCard} >
                <section className={styles.imageBox} >
                <img src={Crawford} className={styles.heroImage} />
                <h2>Dr Crawford (MD, FRCSC)</h2>
                </section>
                <section className={styles.heroText} >
                    <h2>TRIBECA EYECARE CLINIC </h2> <br/>
                    <p> We specialize in treating cornea and eye cataract diseases
                    </p> <br />
                        <div className={styles.hire}>
                        
                            <button className={`${styles.button} ${styles.mobile}`} >PATIENT PORTAL</button>
                         
                         <a href="" download=""> 
                             <button className={styles.button} >BOOK APPOINTMENT</button>
                             </a> 
                        </div> <br /> <br />
                        <h3> Visit us today at 321 Best Street in Toronto!</h3>
                </section>
            </div>
        </div>
    )
};

export default Hero;