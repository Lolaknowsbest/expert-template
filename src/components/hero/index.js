import React from "react";
import styles from "./hero.module.scss";
import Crawford from "../../assets/Crawford.jpg";


function Hero() {
    return (
        <div className={styles.heroBox} >
            <div className={styles.heroCard} >

                <section className={styles.imageBox} >
                <img src={Crawford} className={styles.heroImage} alt='Dr Crawford' />
                <h2>Dr Crawford (MD, FRCSC)</h2>
                </section>

                <section className={styles.heroText} >
                    <h2>TRIBECA EYECARE CLINIC </h2> <br/>
                    <p> We specialize in treating cornea and eye cataract diseases
                    </p> 
                        <div className={styles.hire}>
                        
                            <button className={`${styles.button} ${styles.mobile}`} >PATIENT PORTAL</button>
                         
                         <a  download=""> 
                             <button className={styles.button} >BOOK APPOINTMENT</button>
                             </a> 
                        </div> <br /> 
                        <h3> ADDRESS: 321 Best Street, <br/> Redwood, ON L1G 2K8</h3>
                </section>
            </div>
        </div>
    )
};

export default Hero;