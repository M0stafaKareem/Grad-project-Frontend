import { FunctionComponent, useState } from "react";
import styles from "./InputHeader.module.css";
import SlotSelect from "./SlotSelect";

type InputHeaderType = {
  type?: "3-columns" | "2-columns";
  paragragh: string;
  unit: string | null;
  hasInput?: boolean;
  hasBtn?: boolean;
};
const InputHeader: FunctionComponent<InputHeaderType> = ({
  paragragh,

  type,
  unit,
  hasBtn = true,
  hasInput = true,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainParagraph}>{paragragh}</div>
        {hasInput && (
          <input className={styles.input} placeholder="Enter value" />
        )}
        <h2 className={styles.unit}>{unit}</h2>
        {hasBtn && (
          <button className={styles.btn} onClick={() => setMenuIsOpen(true)}>
            <img alt="click here" src="./options.svg" />
          </button>
        )}
      </div>
      {menuIsOpen && (
        <SlotSelect
          menuType={type === "3-columns" ? "slots" : "slotsReq"}
          closeMenuFunction={setMenuIsOpen}
        />
      )}
    </>
  );
};

export default InputHeader;
