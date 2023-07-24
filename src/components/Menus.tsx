import { FunctionComponent } from "react";
import MenuBtn1 from "../components/MenuBtn1";
import styles from "./Menus.module.css";
type MenuType = {
  menuIcon?: string;
};

const Menus: FunctionComponent<MenuType> = ({
  menuIcon = "../vector3.svg",
}) => {
  return (
    <section className={styles.menus}>
      <MenuBtn1 menuIcon="../vector2.svg" />
      <MenuBtn1 menuIcon={menuIcon} />
      <MenuBtn1 menuIcon="../questioncircle.svg" />
    </section>
  );
};

export default Menus;
