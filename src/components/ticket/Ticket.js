import brandImg from "../../img/brand/brand.svg";

import styles from "./ticket.module.scss";

const Ticket = () => {
  return (
    <>
      <ul className={`${styles["tickets__list"]}`}>
        <li className={`${styles["tickets__list-item"]}`}>
          {/* header */}
          <div className={`${styles["tickets__item-header"]}`}>
            <p className={`${styles["header-price"]}`}>13400</p>
            <img
              className={`${styles["header-logo"]}`}
              src={brandImg}
              alt="Логотип компании перевозки"
            />
          </div>
          {/* info */}
          <div className={`${styles["tickets__item-info"]}`}>
            <ul className={`${styles["info-route"]}`}>
              <li className={`${styles["info-route__country"]}`}>
                <p className={`${styles["info-route__country-name"]}`}>
                  <span>MOW</span> - <span>HKT</span>
                </p>
                <p className={`${styles["info-route__time"]}`}>
                  <span>10:45</span> - <span>08:00</span>
                </p>
              </li>
              <li className={`${styles["info-route__way"]}`}>
                <p className={`${styles["info-route__way-text"]}`}>В пути</p>
                <p className={`${styles["info-route__way-time"]}`}>
                  <span>{"21ч "}</span>
                  <span>{"15м "}</span>
                </p>
              </li>
              <li className={`${styles["info-route__stops"]}`}>
                <p className={`${styles["info-route__stops-count"]}`}>
                  2 пересадки
                </p>
                <p className={`${styles["info-route__stops-name"]}`}>
                  <span>HKB</span>,<span>JNB</span>
                </p>
              </li>
            </ul>
          </div>
          <div className={`${styles["tickets__item-info"]}`}>
            <ul className={`${styles["info-route"]}`}>
              <li className={`${styles["info-route__country"]}`}>
                <p className={`${styles["info-route__country-name"]}`}>
                  <span>MOW</span> - <span>HKT</span>
                </p>
                <p className={`${styles["info-route__time"]}`}>
                  <span>10:45</span> - <span>08:00</span>
                </p>
              </li>
              <li className={`${styles["info-route__way"]}`}>
                <p className={`${styles["info-route__way-text"]}`}>В пути</p>
                <p className={`${styles["info-route__way-time"]}`}>
                  <span>{"21ч "}</span>
                  <span>{"15м "}</span>
                </p>
              </li>
              <li className={`${styles["info-route__stops"]}`}>
                <p className={`${styles["info-route__stops-count"]}`}>
                  2 пересадки
                </p>
                <p className={`${styles["info-route__stops-name"]}`}>
                  <span>HKB</span>,<span>JNB</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <button className={`${styles["tickets__btn"]}`}>
        Показать еще 5 билетов
      </button>
    </>
  );
};

export default Ticket;
