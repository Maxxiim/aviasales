import {
  requestId,
  requestTickets,
  idSuccess,
  ticketsSuccess,
  idFailRule,
  ticketsFailRule,
} from "../action/action-api";

export const sessionId = () => async (dispatch) => {
  dispatch(requestId());
  try {
    const response = await fetch(
      "https://aviasales-test-api.kata.academy/search",
    );
    const data = await response.json();
    const id = data.searchId;
    dispatch(idSuccess(id));
    dispatch(getTickets(id));
  } catch (error) {
    dispatch(idFailRule(error.message));
  }
};

export const getTickets = (id) => async (dispatch) => {
  dispatch(requestTickets());
  try {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
    );

    const data = await response.json();
    dispatch(ticketsSuccess(data.tickets));
  } catch (error) {
    dispatch(ticketsFailRule(error.message));
  }
};
