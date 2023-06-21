import { FunctionComponent } from "react";
import Menus from "../components/Menus";
import styles from "./SearchBar1.module.css";

const SearchBar1: FunctionComponent = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.frameDiv}>
        <div className={styles.group}>
          <img className={styles.icon} src="../search.svg" />
          <input
            placeholder="Search anything"
            type="search"
            className={styles.input}
            tabIndex={-1}
          />
        </div>
        <Menus />
      </div>
    </div>
  );
};

export default SearchBar1;