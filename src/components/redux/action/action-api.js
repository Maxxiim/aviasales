export const requestId = () => {
  return { type: "ID_REQUEST" };
};

export const requestTickets = () => {
  return { type: "TICKETS_REQUEST" };
};

export const idSuccess = (payload) => {
  return { type: "ID_SUCCESS", payload };
};

export const ticketsSuccess = (payload) => {
  return { type: "TICKETS_SUCCESS", payload };
};

export const idFailRule = (payload) => {
  return { type: "ID_FAILURE", payload };
};

export const ticketsFailRule = (payload) => {
  return { type: "TICKETS_FAILURE", payload };
};
