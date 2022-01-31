import React from "react";
import ReactDOM from "react-dom";
import styles from "./testimonials.module.scss";



function Testimonials() {
    return(
        <div className={styles.testimonials} >
          <section>
              <h3>TESTIMONIALS</h3>
          </section>

          <section className={styles.gridBox}>
              <article className={styles.gridCard}>
                  
                  <figcaption> 

                  <h4>Mike Pilon</h4>
                  <p>"I was to have my Cataracts removed from the hospital last June. 
                      Because of covid all was delayed.
So I was referred to Dr Bhargava. The staff was incredible.
I can now see like I have never have before.
What a great experience. Thank you so much"</p>

                  </figcaption>
              </article>
              <article className={styles.gridCard}>
                
                  <figcaption>
                  <h4>John Spence</h4>
                  <p>"I had laser eye surgery by Dr Bhagava. Amazing results!
                       No pain, no swelling, no side effects. I have 20/20 vision thanks to the skill of Dr Bhagava and his team.
                     I am so happy that I found him"</p>
                  </figcaption>
              </article>
              <article className={styles.gridCard}>
                 
                  <figcaption>
                  <h4>Marion Dare</h4>
                  <p>"I was very pleased with everything concerning my cataract removal.  
                      Everything was well explained regarding instructions before,
                during and after the surgery and the staff were very professional and amiable"</p>
                  </figcaption>
              </article>
          </section>
        </div>
    )
};

export default Testimonials;