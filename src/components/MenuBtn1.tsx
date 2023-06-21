import { FunctionComponent, useState } from "react";
import styles from "./MenuBtn1.module.css";
import DropdownMenu from "./DropdownMenu";
import Backdrop from "./Backdrop";

type MenuBtn1Type = {
  menuIcon?: string;
};

const MenuBtn1: FunctionComponent<MenuBtn1Type> = ({ menuIcon }) => {
  const [DropdownIsOpen, changeDropdown] = useState(false);

  function menuBtnHandler() {
    changeDropdown(!DropdownIsOpen);
  }
  return (
    <div>
      <button
        className={styles.envelope}
        onClick={menuBtnHandler}
        tabIndex={-1}
      >
        <img className={styles.vectorIcon} src={menuIcon} />
      </button>
      {DropdownIsOpen && <DropdownMenu />}
      {DropdownIsOpen && <Backdrop onClick={menuBtnHandler} />}
    </div>
  );
};

export default MenuBtn1;
