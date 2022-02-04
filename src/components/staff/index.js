import React from "react";
import ReactDOM from "react-dom";
import styles from "./staff.module.scss";
import rahim from "../../assets/rahim.jpg";
import rogers from "../../assets/rogers.jpg";
import crawford2 from "../../assets/crawford2.jpg";
import beverly from "../../assets/beverly.jpg";

function Staff() {

    return(
        <div className={styles.projects} >
           <section>
               <h3>MEET THE STAFF</h3>
               </section>
            <div className={styles.projectcard}>
                <div className={styles.filterDiv}>
                    <img src={rahim} />
                    <p>DR RAHIM (MD, MPH)</p>
                </div>
                <div className={styles.filterDiv }>
                    <img src={rogers} />
                    <p>DR ROGERS (MD, FRCSC)</p>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={crawford2} />
                    <p>DR CRAWFORD (MD, FRCSC)</p>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={beverly} />
                    <p>DR BEVERLY (MD, FRCSC) </p>
                    </div>
               
            </div>
            
        </div>
    )
};

export default Staff;