import logo from "../../img/logo/logo.svg";

import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__img} src={logo} />
    </div>
  );
};

export default Logo;
