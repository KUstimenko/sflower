import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import styles from "../styles/Home.module.sass";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.footer__top}>
        {/* LEFT START */}
        <div className={styles.footer__topLeft}>
          {/* MENU START */}
          <div className={`${styles.footer__menuColumn} shrink-0`}>
            <Link href="/contact" className={styles.footer__menuTitle}>
              Find a store
            </Link>
            <Link href="/" className={styles.footer__menuTitle}>
              sign up
            </Link>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className={styles.footer__menu}>
            {/* MENU START */}
            <div className={styles.footer__menuColumn}>
              <div className={styles.footer__menuTitle}>get help</div>
              <div className={styles.footer__menuText}>Order Status</div>
              <div className={styles.footer__menuText}>Payment Options</div>
              <div className={styles.footer__menuText}>Contact Us</div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className={styles.footer__menuColumn}>
              <div className={styles.footer__menuTitle}>About</div>
              <Link href="/news">
                <div className={styles.footer__menuText}>News</div>
              </Link>

              <div className={styles.footer__menuText}>Careers</div>
              <div className={styles.footer__menuText}>Investors</div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className={styles.footer__topRight}>
          <Link
            href="https://facebook.com"
            target="_blank"
            className={styles.footer__icon}
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className={styles.footer__icon}
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className={styles.footer__icon}
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className={styles.footer__icon}
          >
            <FaInstagram size={20} />
          </Link>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className={styles.footer__bottom}>
        {/* LEFT START */}
        <div className={styles.footer__bottomText}>
          © <span className="year">{currentYear}</span> s.Flower, Inc. All
          Rights Reserved
        </div>
        {/* LEFT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
