import styles from "./RegisterB.module.css";
const RegisterB = (props) => {
  return (
    <button className={styles.registerb} style={props.style}>
      <img alt="" src="/advBook.svg" />
      <img className={styles.bookIcon1} alt="" src="/book1.svg" />
      Confirm
    </button>
  );
};

export default RegisterB;
