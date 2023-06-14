import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.sass";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="flex justify-center items-center">
              <h1 className={styles.cart__title}>Shopping Cart</h1>
            </div>
            <div className={styles.cart__body}>
              <div className={styles.cart__left}>
                <h2 className={styles.cart__leftTitle}>Cart items</h2>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              <div className={styles.cart__right}>
                <h2 className={styles.cart__leftTitle}>Summary</h2>
                <div className={styles.cartSummary}>
                  <div className="flex justify-between">
                    <h3 className={styles.cartSummary__title}>Subtotal</h3>
                    <span className={styles.cartSummary__totalPrice}>
                      &#8372; {subTotal}
                    </span>
                  </div>
                  <p className={styles.cartSummary__description}>
                    The subtotal reflects the total price of your order. It does
                    not include delivery costs .
                  </p>
                </div>
                <button
                  className={styles.cartSummary__button}
                  onClick={handlePayment}
                >
                  Check out
                  {loading && <img src="/spinner.svg" />}
                </button>
              </div>
            </div>
          </>
        )}
        {cartItems.length < 1 && (
          <div className={styles.cartEmpty}>
            <img
              src="/empty-cart.png"
              width={300}
              height={300}
              alt="empty-cart"
            />
            <h3 className={styles.cartEmpty__title}>Your cart is empty!</h3>
            <p className={styles.cartEmpty__text}>
              Looks like you have not added anything in your cart. <br /> Go
              ahead and explore top categories!
            </p>
            <Link href="/" className={styles.cartEmpty__btn}>
              Continue shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
