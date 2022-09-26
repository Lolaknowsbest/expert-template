import React from "react";
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
                    <img src={rahim} alt='Dr Rahim' />
                    <p>DR RAHIM (MD, MPH)</p>
                </div>
                <div className={styles.filterDiv }>
                    <img src={rogers} alt='Dr Rogers' />
                    <p>DR ROGERS (MD, FRCSC)</p>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={crawford2} alt='Dr Crawford' />
                    <p>DR CRAWFORD (MD, FRCSC)</p>
                    </div>
                <div className={styles.filterDiv}>
                    <img src={beverly} alt='Dr Beverly' />
                    <p>DR BEVERLY (MD, FRCSC) </p>
                    </div>
               
            </div>
            
        </div>
    )
};

export default Staff;