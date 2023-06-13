import React from "react";
import styles from "../styles/Home.module.sass";

const Title = () => {
  return (
    <>
      <section className={styles.loadingData}>
        <h2 className={`${styles.h2} ${styles.loadingText}`}>
          <span className={styles.char}>S</span>
          <span className={styles.char}>.</span>
          <span className={styles.char}>F</span>
          <span className={styles.char}>L</span>
          <span className={styles.char}>O</span>
          <span className={styles.char}>W</span>
          <span className={styles.char}>E</span>
          <span className={styles.char}>R</span>
        </h2>
      </section>
    </>
  );
};

export default Title;
