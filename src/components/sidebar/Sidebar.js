import { useMemo, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import * as transferAction from "../redux/action/action-transfer";

import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const stateCheckedList = useSelector((state) => state.transfer);

  useEffect(() => {
    const allExceptMain = stateCheckedList.filter(
      (item) => item.name !== "all",
    );
    const allChecked = allExceptMain.every((item) => item.check);
    const allItem = stateCheckedList.find((item) => item.name === "all");

    if (allItem && allItem.check !== allChecked) {
      dispatch({
        type: "update_all_only",
        payload: allChecked,
      });
    }
  }, [stateCheckedList]);

  const isChecked = (name) => {
    const item = stateCheckedList.find((item) => item.name === name);
    return item?.check ?? false;
  };

  const handleChange = (fn) => {
    dispatch(fn());
  };

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          all: transferAction.all,
          no_transfer: transferAction.no_transfer,
          one_transfer: transferAction.one_transfer,
          two_transfer: transferAction.two_transfer,
          three_transfer: transferAction.three_transfer,
        },
        dispatch,
      ),
    [dispatch],
  );

  return (
    <div className={styles.sidebar}>
      <h4 className={styles.sidebar__title}>Количество пересадок</h4>
      <ul
        className={`
        ${styles["sidebar__list"]}
        ${dropDown ? styles["sidebar__list-active"] : ""}
        `}
      >
        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="all">
            <span className={styles.label__text}>Все</span>
            <input
              checked={isChecked("all")}
              onChange={() =>
                handleChange(() => actions.all(!isChecked("all")))
              }
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

        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="no-transfer">
            <span className={styles.label__text}>Без пересадок</span>
            <input
              checked={isChecked("no_transfer")}
              onChange={(e) =>
                handleChange(() => actions.no_transfer(e.target.checked))
              }
              className={styles.input}
              type="checkbox"
              name="no_transfer"
              id="no-transfer"
            />
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="one-transfer">
            <span className={styles.label__text}>1 пересадка</span>
            <input
              checked={isChecked("one_transfer")}
              onChange={(e) =>
                handleChange(() => actions.one_transfer(e.target.checked))
              }
              className={styles.input}
              type="checkbox"
              name="one_transfer"
              id="one-transfer"
            />
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="two-transfer">
            <span className={styles.label__text}>2 пересадки</span>
            <input
              checked={isChecked("two_transfer")}
              onChange={(e) =>
                handleChange(() => actions.two_transfer(e.target.checked))
              }
              className={styles.input}
              type="checkbox"
              name="two_transfer"
              id="two-transfer"
            />
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>

        <li className={styles["sidebar__list-item"]}>
          <label className={styles.label} htmlFor="three-transfer">
            <span className={styles.label__text}>3 пересадки</span>
            <input
              checked={isChecked("three_transfer")}
              onChange={(e) =>
                handleChange(() => actions.three_transfer(e.target.checked))
              }
              className={styles.input}
              type="checkbox"
              name="three_transfer"
              id="three-transfer"
            />
            <span
              className={`${styles["input__decor"]} ${styles["input__decor-active"]}`}
            ></span>
          </label>
        </li>
      </ul>
      <button
        className={`${styles["sidebar__dropdown"]}
        ${dropDown ? styles["sidebar__dropdown-active"] : ""}
        `}
        onClick={() => setDropDown(!dropDown)}
        type="button"
      >
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
