const initialState = {
  id: null,
  tickets: [],
  loading: false,
  error: null,
};

export const fetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ID_REQUEST":
    case "ITEMS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "ID_SUCCESS": {
      return { ...state, id: action.payload, loading: false };
    }
    case "TICKETS_SUCCESS": {
      return { ...state, tickets: action.payload, loading: false };
    }
    case "ID_FAILURE":
    case "TICKETS_FAILURE": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
