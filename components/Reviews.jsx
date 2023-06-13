import React from "react";
import styles from "../styles/Home.module.sass";
import Wrapper from "./Wrapper";

const Reviews = () => {
  return (
    <Wrapper>
      <div className={styles.review__wrapper}>
        <span className={styles.review__title}>Review</span>
        <h2 className={styles.review__titleName}>
          Flower Journeys: <br /> Our Clients' Reviews of Inspiring Flowers
        </h2>
        <ul className={styles.review}>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-1.webp" alt="rewiew-1" />
                </div>
                <figcaption className={styles.review__back}>
                  "I want to express my deep gratitude to the wonderful flower
                  shop and lovely girls-sellers! The range is amazing, customer
                  service is top notch, delivery is always accurate and on time!
                  Awesome!"
                  <span>Valerie</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-2.webp" alt="rewiew-2" />
                </div>
                <figcaption className={styles.review__back}>
                  "Ordered a bouquet from wonderful S.flower To be honest, the
                  bouquet exceeded all expectations. I really liked the bouquet,
                  which fit perfectly into my image! Now I want to be among the
                  regular customers ☺️"
                  <span>Karin R.</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-3.webp" alt="rewiew-3" />
                </div>
                <figcaption className={styles.review__back}>
                  "I want to thank the “s.flower” team for their professional
                  work! My birthday turned out to be magical thanks to your
                  decor! In a very short time, you were able to perfectly cope
                  with the task."
                  <span>Sasha</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-4.webp" alt="rewiew-4" />
                </div>
                <figcaption className={styles.review__back}>
                  " We would like to thank you for your excellent service! The
                  circumstances were such that the bouquet as a gift was
                  urgently needed, thank you for going to the meeting and
                  bringing it in the morning. The flower is in excellent
                  condition, also beautifully packaged! We are your clients
                  now!"
                  <span>Jason</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-5.webp" alt="rewiew-5" />
                </div>
                <figcaption className={styles.review__back}>
                  "Thank you very much for decorating our holiday! Everything
                  was just wonderful! Even better than we could have dreamed,
                  the guests were delighted. Thank you for being a great part of
                  our wedding!"
                  <span>Daria</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-6.webp" alt="rewiew-6" />
                </div>
                <figcaption className={styles.review__back}>
                  "Thank you very much for a very beautiful bouquet and pleasant
                  service!!! A bouquet of hydrangeas conquered everyone: fresh
                  and fragrant flowers, stylish and delicate packaging! A caring
                  store employee even gave a special flask and a means to keep
                  the flowers fresh for as long as possible. Definitely
                  recommend this store!"
                  <span>Harry P.</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-7.webp" alt="rewiew-7" />
                </div>
                <figcaption className={styles.review__back}>
                  "Placed an order with this store. Many thanks for the service
                  and patience! Everything was done at the highest level. I
                  highly recommend! Thanks for your work. You make our life
                  alive and beautiful! Thanks to you, our tables have been
                  transformed!"
                  <span>Anna</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-8.webp" alt="rewiew-8" />
                </div>
                <figcaption className={styles.review__back}>
                  "Great service! Timely delivery and a beautiful fresh bouquet,
                  I will order the next flowers here. Thank you mom was very
                  pleased!"
                  <span>Gloria</span>
                </figcaption>
              </figure>
            </a>
          </li>
          <li className={styles.review__item}>
            <a href="/">
              <figure>
                <div className={styles.review__front}>
                  <img src="/review-9.webp" alt="rewiew-9" />
                </div>
                <figcaption className={styles.review__back}>
                  "Ordered a bouquet and boutonnieres for the most important
                  event in our lives. The reality exceeded all our expectations.
                  Just a wonderful fulfillment of our wishes! Fresh and very
                  beautiful flowers delighted us for two more weeks after the
                  event!"
                  <span>Victoria and Alex</span>
                </figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Reviews;
