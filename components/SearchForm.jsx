import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.sass";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      router.push(`/search?query=${searchTerm}`);
      setSearchTerm("");
    } else {
      setIsAnimating(true);
    }
  };
  return (
    <form
      className={`${styles.form} ${isAnimating ? "shake" : "animate-none"}`}
      onSubmit={handleSubmit}
    >
      <input
        value={searchTerm}
        onChange={handleSearchInput}
        type="text"
        placeholder="Search ..."
      />
      <button className={styles.form__btn}>
        <FiSearch className="md:text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
