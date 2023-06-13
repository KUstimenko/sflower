import React from "react";
import styles from "@/styles/Home.module.sass";
import ReactMarkdown from "react-markdown";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addGiftToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleAddToCart = () => {
    const selectedProduct = product?.data?.[0];
    const selectedCategory =
      selectedProduct?.attributes?.categories.data?.[0].attributes.name;
    console.log(selectedCategory);
    dispatch(
      addToCart({
        ...selectedProduct,
        oneQuantityPrice: p.price,
      })
    );
    notify();
    if (selectedCategory === "Bouquets") {
      const giftProduct = products?.data?.find(
        (product) => product.attributes.subtitle === "Postcard"
      );
      console.log(giftProduct);

      if (giftProduct) {
        dispatch(
          addGiftToCart({
            ...giftProduct,
            oneQuantityPrice: 0,
          })
        );
        notify();
      }
    }
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className={styles.productDetails}>
          <div className={styles.productDetails__carousel}>
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          <div className={styles.productDetailsInfo}>
            <div className={styles.productDetailsInfo__title}>{p.name}</div>
            <div className={styles.productDetailsInfo__subtitle}>
              {p.subtitle}
            </div>
            <div
              className={
                (styles.productDetailsInfo__buy, styles.productDetailsBuy)
              }
            >
              <p className={styles.productDetailsBuy__price}>
                &#8372; {p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8372;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-bold text-orange-600">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>
            <button
              className={styles.productDetailsBuy__button}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <div className={styles.productDetailsInfo__description}>
              <ReactMarkdown>{p.description}</ReactMarkdown>
            </div>
          </div>
        </div>
        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
