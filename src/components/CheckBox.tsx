import { FunctionComponent } from "react";
import styles from "./CheckBox.module.css";

type checkBoxType = {
  checkBoxstate?: boolean;
  isDisabled?: boolean;
};
const CheckBox: FunctionComponent<checkBoxType> = ({
  checkBoxstate,
  isDisabled,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={checkBoxstate}
        disabled={isDisabled}
      />
      <span className={styles.checkbox}></span>
    </label>
  );
};
export default CheckBox;
