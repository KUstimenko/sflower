import Wrapper from "@/components/Wrapper";
import styles from "../styles/Home.module.sass";
import React from "react";
import Iframe from "react-iframe";
const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.contacts}>
          <div className={(styles.contacts__map, styles.mapContacts)}>
            <h3 className="map-contacts__title">You can find us here!</h3>
            <Iframe
              className={styles.iframe}
              url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4279.32416634449!2d30.515637062201463!3d50.455593251938424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1684049316214!5m2!1suk!2sua"
              style="border: 0; border-radius: 16px"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
          <div className={styles.contacts__content}>
            <ul className={(styles.contacts__list, styles.listContacts)}>
              <li className={styles.listContacts__item}>
                <div className={styles.listContacts__icon}>
                  <img src="phone.svg" alt="Phone" />
                </div>
                <div className={styles.listContacts__body}>
                  <div className={styles.listContacts__title}>Phone</div>
                  <div className={styles.listContacts__text}>
                    38-067-375-66-11
                  </div>
                </div>
              </li>
              <li className={styles.listContacts__item}>
                <div className={styles.listContacts__icon}>
                  <img src="mail.svg" alt="Mail" />
                </div>
                <div className={styles.listContacts__body}>
                  <div className={styles.listContacts__title}>E-Mail</div>
                  <div className={styles.listContacts__text}>
                    sflowers@gmail.com
                  </div>
                </div>
              </li>
              <li className={styles.listContacts__item}>
                <div className={styles.listContacts__icon}>
                  <img src="inst.svg" alt="Inst" />
                </div>
                <div className={styles.listContacts__body}>
                  <div className={styles.listContacts__title}>Instagram</div>
                  <div className={styles.listContacts__text}>@s.flowers</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
