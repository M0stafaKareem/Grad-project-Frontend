import { FunctionComponent, useState } from "react";
import styles from "./LoginFrom.module.css";
import LoginButton from "./LoginButton";
import { FetchDataService } from "../../service/fetchData";
import { useNavigate } from "react-router-dom";

type loginFormType = {
  setLoadingScreen: (state: any) => void;
};
const LoginFrom: FunctionComponent<loginFormType> = ({ setLoadingScreen }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(false);

  async function loginBtnHandler(e: any) {
    e.preventDefault();
    const f1 = new FetchDataService();
    let privlage = await f1.authenticate(username, password, setLoadingScreen);
    if (privlage == 2) {
      let advisorData = await f1.getAdvisorData();
      navigate("/advisorsPage", { state: advisorData });
    } else if (privlage == 1) {
      let studentData = await f1.getStudentData();
      navigate("/studentsPage", { state: studentData });
    } else {
      setUsername("");
      setPassword("");
      setError(true);
    }
  }

  return (
    <form className={styles.frameForm}>
      <section className={styles.loginSection}>
        <h2 className={styles.lOGINH2}>LOGIN</h2>
      </section>

      <div className={styles.input_group}>
        <input
          className={error ? styles.error : styles.input}
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          required={true}
          onFocusCapture={() => setError(false)}
          type="text"
        />
        <label className={styles.user_label}>Student Email</label>
      </div>

      <div className={styles.input_group}>
        <input
          className={error ? styles.error : styles.input}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required={true}
          onFocusCapture={() => setError(false)}
          type="password"
        />
        <label className={styles.user_label}>Password</label>
      </div>

      <LoginButton btnOnClick={loginBtnHandler} />
    </form>
  );
};

export default LoginFrom;
