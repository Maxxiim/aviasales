import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

import * as priority from "../redux/action/action-priority";

import styles from "./priority_options.module.scss";

const Priority = () => {
  const dispatch = useDispatch();
  const activePriority = useSelector((state) => state.filter);

  const actions = useMemo(() => {
    return bindActionCreators(
      {
        cheap: priority.cheap,
        fast: priority.fast,
        optimal: priority.optimal,
      },
      dispatch,
    );
  }, [dispatch]);

  return (
    <div className={styles["priority"]}>
      <button
        className={`${styles["priority__btn"]} 
        ${activePriority.cheap ? styles["priority__btn-active"] : ""}`}
        onClick={actions.cheap}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles["priority__btn"]}
       ${activePriority.fast ? styles["priority__btn-active"] : ""}
      `}
        onClick={actions.fast}
      >
        Самый быстрый
      </button>
      <button
        className={`${styles["priority__btn"]}
         ${activePriority.optimal ? styles["priority__btn-active"] : ""}
        `}
        onClick={actions.optimal}
      >
        Самый оптимальный
      </button>
    </div>
  );
};

export default Priority;
