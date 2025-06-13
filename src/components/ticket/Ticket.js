import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./ticket.module.scss";

const Ticket = ({ tickets, spinner, loading }) => {
  const [visibleTicket, setVisibleTicket] = useState(5);

  const [newTickets, setNewTickets] = useState([]);

  const selectorDateStateCheck = useSelector((state) => state.transfer);

  const priorityFilter = useSelector((state) => state.filter);

  const showMoreTicket = () => {
    setVisibleTicket((prev) => prev + 5);
  };

  const isActiveAddBtn = () => {
    const lengthTickets = newTickets.length;
    const currentCount = visibleTicket;
    return currentCount >= lengthTickets;
  };

  useEffect(() => {
    const checkList = selectorDateStateCheck
      .filter((item) => item.check)
      .map((item) => item.id);

    let filteredTickets = tickets;
    if (checkList.length > 0) {
      filteredTickets = tickets.filter((ticket) =>
        ticket.segments.every((segment) =>
          checkList.includes(segment.stops.length + 1),
        ),
      );
    }

    const activeFilter = Object.entries(priorityFilter).find(
      ([, value]) => value,
    )?.[0];

    const sortTickets = (tickets, filter) => {
      switch (filter) {
        case "cheap":
          return [...tickets].sort((a, b) => a.price - b.price);
        case "fast":
          return [...tickets].sort(
            (a, b) =>
              a.segments.reduce((sum, seg) => sum + seg.duration, 0) -
              b.segments.reduce((sum, seg) => sum + seg.duration, 0),
          );
        case "optimal":
          return [...tickets].sort((a, b) => {
            const sumA =
              a.price + a.segments.reduce((sum, seg) => sum + seg.duration, 0);
            const sumB =
              b.price + b.segments.reduce((sum, seg) => sum + seg.duration, 0);
            return sumA - sumB;
          });
        default:
          return tickets;
      }
    };

    const sortedTickets = sortTickets(filteredTickets, activeFilter);
    setNewTickets(sortedTickets);
  }, [selectorDateStateCheck, tickets, priorityFilter]);

  const checkStatusActionSidebar = selectorDateStateCheck.every(
    (status) => status.check === false,
  );

  const spin = loading ? spinner : null;
  let content = null;

  if (loading) {
    content = null;
  } else if (checkStatusActionSidebar) {
    content = (
      <p className={`${styles["message__info"]}`}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </p>
    );
  } else {
    content = (
      <Content
        isActiveAddBtn={isActiveAddBtn}
        tickets={newTickets}
        showMoreTicket={showMoreTicket}
        visibleTicket={visibleTicket}
      />
    );
  }

  return (
    <>
      {spin}
      {content}
    </>
  );
};

const Content = ({
  showMoreTicket,
  visibleTicket,
  tickets,
  isActiveAddBtn,
}) => {
  return (
    <React.Fragment>
      <ul className={`${styles["tickets__list"]}`}>
        {tickets.slice(0, visibleTicket).map((ticket, index) => {
          return (
            <li className={`${styles["tickets__list-item"]}`} key={index}>
              <div className={`${styles["tickets__item-header"]}`}>
                <p className={`${styles["header-price"]}`}>{ticket.price}</p>
                <img
                  className={`${styles["header-logo"]}`}
                  src={`https://pics.avs.io/110/36/${ticket.carrier}.png`}
                  alt={`carrier airline ${ticket.carrier}`}
                />
              </div>

              {ticket.segments.map((segment, index) => {
                const time = segment.date;
                const departureDate = new Date(time);
                const departureHours = departureDate.getHours();
                const departureMinutes = departureDate.getMinutes();
                const durationMinutes = segment.duration;
                const travelHours = Math.floor(durationMinutes / 60);
                const travelMinutes = durationMinutes % 60;

                const arrivalTime =
                  departureHours * 60 + departureMinutes + durationMinutes;
                const arrivalHours = Math.floor(arrivalTime / 60) % 24;
                const arrivalMinutes = arrivalTime % 60;

                const pad = (num) => String(num).padStart(2, "0");

                return (
                  <div
                    key={index}
                    className={`${styles["tickets__item-info"]}`}
                  >
                    <ul className={`${styles["info-route"]}`}>
                      <li className={`${styles["info-route__country"]}`}>
                        <p className={`${styles["info-route__country-name"]}`}>
                          <span>{segment.origin}</span>
                          <span>{segment.destination}</span>
                        </p>
                        <p className={`${styles["info-route__time"]}`}>
                          <span>{`${pad(departureHours)}:${pad(departureMinutes)}`}</span>{" "}
                          -{" "}
                          <span>
                            {`${pad(arrivalHours)}`}:{`${pad(arrivalMinutes)}`}
                          </span>
                        </p>
                      </li>
                      <li className={`${styles["info-route__way"]}`}>
                        <p className={`${styles["info-route__way-text"]}`}>
                          В пути
                        </p>
                        <p className={`${styles["info-route__way-time"]}`}>
                          <span>{`${pad(travelHours)}ч `}</span>
                          <span>{`${pad(travelMinutes)}м`}</span>
                        </p>
                      </li>
                      <li className={`${styles["info-route__stops"]}`}>
                        <p className={`${styles["info-route__stops-count"]}`}>
                          {`пересадки: ${segment.stops.length} `}
                        </p>
                        <p className={`${styles["info-route__stops-name"]}`}>
                          {segment.stops.map((stop, index) => (
                            <span
                              key={index}
                              className={`${styles["info-route__stops-name-text"]}`}
                            >{`${stop}`}</span>
                          ))}
                        </p>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
      <button
        className={`${styles["tickets__btn"]}
        ${!isActiveAddBtn() ? styles["tickets__btn-active"] : ""}
        `}
        onClick={() => showMoreTicket()}
      >
        Показать еще 5 билетов
      </button>
    </React.Fragment>
  );
};

export default Ticket;
