import styles from "./priority_options.module.scss";

const Priority = () => {
  return (
    <div className={styles["priority"]}>
      <button
        className={`${styles["priority__btn"]} ${styles["priority__btn-active"]}`}
      >
        Самый дешевый
      </button>
      <button className={styles["priority__btn"]}>Самый быстрый</button>
      <button className={styles["priority__btn"]}>Самый оптимальный</button>
    </div>
  );
};

export default Priority;
