// import { useCallback, useEffect, useState } from "react";

import Logo from "../logo/Logo.js";
import Sidebar from "../sidebar/Sidebar.js";
import Priority from "../priority_options/Priority_options.js";
import Ticket from "../ticket/Ticket.js";

import styles from "./app.module.scss";

const App = () => {
  // const [sessionId, setSessionId] = useState(null);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const getFetchId = await fetch(
  //       "https://aviasales-test-api.kata.academy/search",
  //     );
  //     const dataGetFetchId = await getFetchId.json();
  //     setSessionId(dataGetFetchId.searchId);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(
  //   useCallback(() => {
  //     if (!sessionId) return;
  //     const getListTickets = async () => {
  //       const getFetchTickets = await fetch(
  //         `https://aviasales-test-api.kata.academy/tickets?searchId=${sessionId}`,
  //       );
  //       if (sessionId !== null) {
  //         const dataListTickets = await getFetchTickets.json();
  //         setData(dataListTickets.tickets);
  //       }
  //     };
  //     getListTickets();
  //   }, [sessionId]),
  //   [sessionId],
  // );
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.cards}>
          <Priority />
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default App;
