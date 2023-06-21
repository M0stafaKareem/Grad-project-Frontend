import styles from "./RegisterB.module.css";
const RegisterB = () => {
  return (
    <button className={styles.registerb}>
      <img alt="" src="/advBook.svg" />
      <img className={styles.bookIcon1} alt="" src="/book1.svg" />
      Confirm
    </button>
  );
};

export default RegisterB;
