import styles from "./inputRow.module.css";
import { FunctionComponent } from "react";
type InputRowType = {
  menuType?: "slots" | "slotsReq";
};
const InputRow: FunctionComponent<InputRowType> = ({ menuType = "slots" }) => {
  return (
    <div className={styles.frameParent}>
      {menuType === "slotsReq" && (
        <input
          className={styles.frameItem}
          type="text"
          placeholder="Enter Name"
        />
      )}
      <select className={styles.frameChild} defaultValue={""}>
        <option value="" disabled hidden>
          Choose slot
        </option>
      </select>
      {menuType === "slots" && (
        <>
          <input className={styles.frameItem} type="text" placeholder="10:30" />
          <input className={styles.frameItem} type="text" placeholder="12:00" />
        </>
      )}
    </div>
  );
};

export default InputRow;
