import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import styles from "@/styles/Home.module.sass";

export default function Home({ products }) {
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
          {products.data.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        <Reviews />
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi(
    "/api/products?populate=*&filters[isGift]=false"
  );
  return {
    props: { products },
  };
}
