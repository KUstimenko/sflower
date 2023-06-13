import { getDiscountedPricePercentage } from "@/utils/helper";
import styles from "../styles/Home.module.sass";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 rounded-lg hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className={styles.productCard__body}>
        <h2 className={styles.productCard__title}>{p.name}</h2>
        <div className={styles.productCard__info}>
          <p className={styles.productCard__price}>&#8372;{p.price}</p>
          {p.original_price && (
            <>
              <p className={styles.productCard__originalprice}>
                &#8372;{p.original_price}
              </p>
              <p className={styles.productCard__discount}>
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
