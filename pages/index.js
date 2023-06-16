import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import styles from "@/styles/Home.module.sass";
import React, { useState } from "react";
import useSWR from "swr";

const maxResult = 6;
const initialPageIndex = 1;

export default function Home({ products }) {
  const [pageIndex, setPageIndex] = useState(initialPageIndex);

  const { data, error, isValidating } = useSWR(
    `/api/products?populate=*&filters[isGift]=false&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className={styles.headerBlock}>
          <div className={styles.title}>
            <Title />
          </div>
          <p className={styles.headerBlock__subtitle}>
            let's make some good. <br />
            Bring joy every day with our fresh and beautiful flowers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* PAGINATION BUTTONS START */}
        <div className={styles.buttonsPage}>
          <button
            className={styles.buttonsPage__btn}
            disabled={pageIndex === initialPageIndex}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            Previous
          </button>

          <span className="font-bold">{`${pageIndex} of ${
            data && data.meta.pagination.pageCount
          }`}</span>

          <button
            className={styles.buttonsPage__btn}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
        {/* PAGINATION BUTTONS END */}
        {/* Loading state */}
        {isValidating && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.svg" width={250} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
        {/* Error state */}
        {error && <span>Error fetching data</span>}
        <Reviews />
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi(
    `/api/products?populate=*&filters[isGift]=false&pagination[page]=${initialPageIndex}&pagination[pageSize]=${maxResult}`
  );
  return {
    props: { products },
  };
}
