import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h4 className={styles.sidebar__title}>Количество пересадок</h4>
      <ul className={styles.sidebar__list}>
        {/* all */}
        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="all">
            <span className={styles.label__text}>Все</span>
            <input
              className={styles.input}
              type="checkbox"
              name="all"
              id="all"
            />
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        {/* без пересадок */}
        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="no-transfer">
            <span className={styles.label__text}>Без пересадок</span>
            <input
              className={styles.input}
              type="checkbox"
              name="all"
              id="no-transfer"
            ></input>
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        {/* 1 пересадка */}
        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="1transfer">
            <span className={styles.label__text}>1 пересадка</span>
            <input
              className={styles.input}
              type="checkbox"
              name="all"
              id="1transfer"
            ></input>
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        {/* 2 пересадка */}
        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="2transfer">
            <span className={styles.label__text}>2 пересадки</span>
            <input
              className={styles.input}
              type="checkbox"
              name="all"
              id="2transfer"
            ></input>
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        {/* 2 пересадка */}
        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="3transfer">
            <span className={styles.label__text}>3 пересадки</span>
            <input
              className={styles.input}
              type="checkbox"
              name="all"
              id="3transfer"
            ></input>
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>
      </ul>
      <button className={`${styles["sidebar__dropdown"]}`} type="button">
        <svg
          className={`${styles["sidebar__dropdown-svg"]}`}
          width="8"
          height="8"
          viewBox="0 0 8 14"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
