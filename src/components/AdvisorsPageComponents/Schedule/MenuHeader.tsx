import { FunctionComponent } from "react";
import styles from "./MenuHeader.module.css";

type MenuHeaderType = {
  menuType?: "slots" | "slotsReq";
};
const MenuHeader: FunctionComponent<MenuHeaderType> = ({
  menuType = "slots",
}) => {
  return (
    <div className={styles.frameParent1}>
      {menuType === "slotsReq" && (
        <h2 className={styles.timeSlotWrapper}>
          <div className={styles.timeSlot}>Name</div>
        </h2>
      )}
      <h2 className={styles.timeSlotWrapper}>
        <div className={styles.timeSlot}>Time Slot</div>
      </h2>
      {menuType === "slots" && (
        <>
          <h2 className={styles.fromWrapper}>
            <div className={styles.timeSlot}>From</div>
          </h2>
          <div className={styles.to}>To</div>
        </>
      )}
    </div>
  );
};

export default MenuHeader;
