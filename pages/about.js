import React from "react";
import styles from "../styles/Home.module.sass";
import Wrapper from "@/components/Wrapper";

const About = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.flex}>
          <div className={styles.about}>
            <div className={(styles.about__header, styles.headerBlock)}>
              <h1 className={styles.headerBlock__title}>About S.FLOWER</h1>
              <p className={styles.headerBlock__text}>
                Hi, we are the “s.flower” team! We always knew that we wanted to
                sell flowers, bring our vision of beauty to the world, and give
                people a holiday. We try to sell things as we would like to
                receive them ourselves. So that it would be nice to give them,
                and the recipient would be interested in looking at the details,
                discovering new types of flowers and plants. We follow the
                development of the floristic field in the world every day and
                improve our skills.
              </p>
              <div className="flex justify-center items-center pt-4">
                <img
                  src="about-1.webp"
                  alt="sflower team"
                  className={styles.headerBlock__img}
                />
              </div>
            </div>
            <div className={`${styles.about__body} ${styles.about__first}`}>
              <img src="about-2.webp" className={styles.about__img} />
              <div className={styles.about__content}>
                <h2 className={styles.about__title}>Our bouquets</h2>
                <div className={styles.about__text}>
                  When ordering, we ask customers to leave room for creativity
                  and we believe that it is this special look that distinguishes
                  our bouquets from others.
                </div>
              </div>
            </div>
            <div className={styles.about__body}>
              <div className={styles.about__content}>
                <h2 className={styles.about__title}>Not only flowers</h2>
                <div className={styles.about__text}>
                  When ordering, we ask customers to leave room for creativity
                  and we believe that it is this special look that distinguishes
                  our bouquets from others.
                </div>
              </div>
              <img src="about-3.webp" className={styles.about__img} />
            </div>
            <div className={`${styles.about__body} ${styles.about__first}`}>
              <img src="about-4.webp" className={styles.about__img} />
              <div className={styles.about__content}>
                <h2 className={styles.about__title}>Weddings</h2>
                <div className={styles.about__text}>
                  A walk for two, a festive dinner in the circle of the closest
                  or a party for 100 people? Regardless of the chosen format, we
                  will make this day really special!
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
