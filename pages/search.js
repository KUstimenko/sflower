import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchDataFromApi } from "@/utils/api";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import styles from "@/styles/Home.module.sass";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDataFromApi(
          "/api/products?populate=*&filters[isGift]=false"
        );
        const products = data.data;
        // Фильтрация продуктов по поисковому запросу
        const filteredResults = products?.filter((product) => {
          return product.attributes.name
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error loading search results:", error);
      }
    };
    loadData();
  }, [query]);

  return (
    <Wrapper>
      <div className="container mx-auto py-5">
        <h1 className="text-center pt-2 text-2xl font-semibold">
          Search Results
        </h1>
        {searchResults.length > 0 ? (
          <div className={styles.searchProduct}>
            {searchResults.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <p className="text-center py-8">
            🙄🙄ps, no results for your request...
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default Search;
