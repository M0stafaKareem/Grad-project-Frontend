import { FunctionComponent } from "react";
import Menus from "../components/Menus";
import styles from "./SearchBar1.module.css";

type searchBarType = {
  icon?: string;
};
const SearchBar1: FunctionComponent<searchBarType> = ({
  icon = "../vector3.svg",
}) => {
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
        <Menus menuIcon={icon} />
      </div>
    </div>
  );
};

export default SearchBar1;
