import { FunctionComponent } from "react";
import styles from "./SlotSelect.module.css";
import InputRow from "./inputRow";
import MenuHeader from "./MenuHeader";
import RegisterButton from "../../StudendtsPageComponents/Advising/RegisterButton";
import Backdrop from "../../Backdrop";

type SlotSelectType = {
  menuType: "slots" | "slotsReq";
  closeMenuFunction: Function;
};
const SlotSelect: FunctionComponent<SlotSelectType> = ({
  closeMenuFunction,
  menuType,
}) => {
  return (
    <>
      <Backdrop onClick={() => closeMenuFunction(false)} />
      <div className={styles.slotselect}>
        <MenuHeader menuType={menuType} />
        <div className={styles.inputRows}>
          <InputRow menuType={menuType} />
          <InputRow menuType={menuType} />
          <InputRow menuType={menuType} />
          <RegisterButton
            userMode="advisors"
            RegBtnOnClick={() => closeMenuFunction(false)}
          />
        </div>
      </div>
    </>
  );
};

export default SlotSelect;
