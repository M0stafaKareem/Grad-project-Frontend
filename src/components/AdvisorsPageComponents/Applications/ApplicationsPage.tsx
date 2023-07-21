import { FunctionComponent } from "react";
import styles from "./ApplicationsPage.module.css";
import RgCrad1 from "./RgCrad1";

const ApplicationsPage: FunctionComponent = () => {
  return (
    <main className={styles.advisingPage}>
      <RgCrad1 />
      <RgCrad1 />
      <RgCrad1 />
      <RgCrad1 />
      <RgCrad1 />
      <RgCrad1 />
      <RgCrad1 />
    </main>
  );
};

export default ApplicationsPage;
