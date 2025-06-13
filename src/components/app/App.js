import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTickets, sessionId } from "../redux/api/fetchTickets.js";
import Logo from "../logo/Logo.js";
import Sidebar from "../sidebar/Sidebar.js";
import Priority from "../priority_options/Priority_options.js";
import Ticket from "../ticket/Ticket.js";
import Spinner from "../spinner/Spinner.js";

import styles from "./app.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const sessionIdd = useSelector((state) => state.fetch.id);
  const tickets = useSelector((state) => state.fetch.tickets);
  const loading = useSelector((state) => state.fetch.loading);

  useEffect(() => {
    dispatch(sessionId());
  }, [dispatch]);

  useEffect(() => {
    if (sessionIdd) {
      dispatch(getTickets(sessionIdd));
    }
  }, [sessionIdd, dispatch]);

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.cards}>
          <Priority />
          <Ticket loading={loading} spinner={<Spinner />} tickets={tickets} />
        </div>
      </div>
    </div>
  );
};

export default App;
