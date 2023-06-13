import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import styles from "../styles/Home.module.sass";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setlastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const { cartItems } = useSelector((state) => state.cart);

  const controlNavbar = useCallback(() => {
    const { scrollY } = window;
    if (scrollY > 200) {
      const show =
        !mobileMenu && scrollY > lastScrollY
          ? "-translate-y-[80px]"
          : "shadow-sm";
      setShow(show);
    } else {
      setShow("translate-y-0");
    }
    setlastScrollY(scrollY);
  }, [lastScrollY, mobileMenu]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] ps-2 pe-8 md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Link href="/">
        <img src="/logo.svg" className={styles.header__logo} alt="logo" />
      </Link>
      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        categories={categories}
      />

      {mobileMenu && (
        <MenuMobile
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
          categories={categories}
        />
      )}
      <div className={styles.header__search}>
        <SearchForm />
      </div>
      <div className={styles.header__cart}>
        <Link href="/cart">
          <div className={styles.header__cartLink}>
            <BsCart className={styles.header__cartIcon} />
            {cartItems.length > 0 && (
              <div className={styles.header__cartDigit}>{cartItems.length}</div>
            )}
          </div>
        </Link>
        <div className={styles.buttonActive}>
          {mobileMenu ? (
            <VscChromeClose
              className="text-[16px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[20px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
