import Link from "next/link";
import React from "react";
import { GiFlowerPot, GiFlowers } from "react-icons/gi";
import { BsChevronDown, BsPostcardHeart } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineGift,
} from "react-icons/ai";
import { IoIosContact, IoMdRose } from "react-icons/io";
import styles from "../styles/Home.module.sass";

const data = [
  { id: 1, name: "Home", url: "/", icon: <AiOutlineHome size={18} /> },
  {
    id: 2,
    name: "About",
    url: "/about",
    icon: <AiOutlineInfoCircle size={18} />,
  },
  { id: 3, name: "Caterories", subMenu: true, icon: <GiFlowers size={18} /> },
  { id: 4, name: "Contact", url: "/contact", icon: <IoIosContact size={18} /> },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  const categoryIcons = {
    1: <IoMdRose size={18} />,
    2: <GiFlowerPot size={18} />,
    3: <AiOutlineGift size={18} />,
    4: <BsPostcardHeart size={18} />,
  };
  return (
    <ul className={styles.menu}>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className={styles.menu__item}
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                <span className={styles.menu__icon}>{item.icon}</span>
                {item.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul className={styles.menuSub}>
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${c.slug}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className={styles.menuSub__item}>
                            {c.name}
                            {categoryIcons[id]}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link className={styles.menu__item} href={item?.url}>
                  <span className={styles.menu__icon}>{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
