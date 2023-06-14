import { updateCart, removeFromCart } from "@/store/cartSlice";
import styles from "../styles/Home.module.sass";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ data }) => {
  const p = data.attributes;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const hasBouquet = cartItems.some(
    (item) => item.attributes.categories.data[0].attributes.name === "Bouquets"
  );
  const isPostcard = p.subtitle === "Postcard";
  const imageClass =
    isPostcard && hasBouquet
      ? `${styles.cartItem__img} gift`
      : styles.cartItem__img;
  const isSelect =
    isPostcard && hasBouquet
      ? `${styles.cartItem__quantity} isSelect`
      : styles.cartItem__quantity;
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className={styles.cartItem}>
      <div className={imageClass}>
        <Image
          width={120}
          height={120}
          alt={p.name}
          src={p.thumbnail.data.attributes.url}
        />
      </div>
      <div className={styles.cartItem__body}>
        <div className={styles.cartItem__top}>
          <p className={styles.cartItem__title}>{p.name}</p>
          <span className={styles.cartItem__price}>&#8372; {p.price}</span>
        </div>
        <p className={styles.cartItem__subtitle}>{p.subtitle}</p>
        <div className={styles.cartItem__bottom}>
          <div className={isSelect}>
            <h3 className="font-semibold">Quantity:</h3>
            <select
              className={styles.cartItem__quantitySelect}
              value={data.quantity}
              onChange={(e) => updateCartItem(e, "quantity")}
            >
              {Array.from({ length: 15 }, (_, i) => i + 1).map((q, i) => {
                return (
                  <option key={i} value={q}>
                    {q}
                  </option>
                );
              })}
            </select>
          </div>
          <RiDeleteBin6Line
            className={styles.cartItem__remove}
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
