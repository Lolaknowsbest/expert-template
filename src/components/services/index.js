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
            <section className={styles.projectcard}>
                <div className={styles.filterDiv}>
                    <img src={cataract} />
                    <article>
                    <h4>CATARACT SURGERY</h4>
                    <p>Cataract surgery is a procedure to remove the
                         lens of your eye and, in most cases, replace it with an artificial lens. 
                       <br /> <br/> Normally, the lens of your eye is clear. A cataract causes the lens to become cloudy,
                         which eventually affects your vision</p>
                    </article>
                </div>
                <div className={styles.filterDiv }>
                    <img src={cornea} />
                    <article>
                    <h4>CORNEA SURGERY</h4>
                    <p>A cornea transplant can restore vision, reduce pain, 
                        and improve the appearance of a damaged or diseased cornea.
                        Your cornea is the transparent, dome-shaped surface of your eye. 
                        It's where light enters your eye and affects eye's ability to see clearly.</p>
                    </article>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={comprehensive} />
                    <article>
                    <h4>COMPREHENSIVE OPTHAMALOGY</h4>
                    <p>This service handles general eye exams and common eye conditions  
                    We provide screening examinations for patients with chronic illnesses. Patients diagnosed with serious eye conditions are referred to the appropriate subspecialty area</p>
                    </article>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={consult} />
                    <article>
                    <h4>VISION CONSULT</h4>
                    <p>The objective of pre-operative consultations is to confirm candidacy, which is determined using safe, painless diagnostic technology and testing. 
                   <br/><br/> During your procedure, our team will also discuss the cost of your procedure as well as our financing options.</p>
                    </article>
                    </div>
               
            </section>
            
        </div>
    )
};

export default Services;