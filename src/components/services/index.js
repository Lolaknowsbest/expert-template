import React from "react";
import ReactDOM from "react-dom";
import styles from "./services.module.scss";
import cataract from "../../assets/cataract.jpg";
import cornea from "../../assets/cornea.jpg";
import comprehensive from "../../assets/comprehensive.png";
import consult from "../../assets/consult.jpeg";

function Services() {

    return(
        <div className={styles.projects} >
           <section>
               <h3>SERVICES</h3>
               </section>
            <div className={styles.projectcard}>
                <div className={styles.filterDiv}>
                    <img src={cataract} />
                    <p>CATARACT SURGERY</p>
                </div>
                <div className={styles.filterDiv }>
                    <img src={cornea} />
                    <p>CORNEA SURGERY</p>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={comprehensive} />
                    <p>COMPREHENSIVE OPTHAMALOGY</p>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={consult} />
                    <p>VISION CONSULT</p>
                    </div>
               
            </div>
            
        </div>
    )
};

export default Services;