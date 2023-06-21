import { FunctionComponent } from "react";
import MenuBtn1 from "../components/MenuBtn1";
import styles from "./Menus.module.css";

const Menus: FunctionComponent = () => {
  return (
    <section className={styles.menus}>
      <MenuBtn1 menuIcon="../vector2.svg" />
      <MenuBtn1 menuIcon="../vector3.svg" />
      <MenuBtn1 menuIcon="../questioncircle.svg" />
    </section>
  );
};

export default Menus;
