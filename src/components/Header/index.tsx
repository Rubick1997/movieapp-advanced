import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <span
      className={styles.header}
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      🎬 Entertainment database 🍿
    </span>
  );
};

export default Header;
