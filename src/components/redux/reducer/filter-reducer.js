const filterState = {
  cheap: true,
  fast: false,
  optimal: false,
};

export const priorityFilter = (state = filterState, action) => {
  switch (action.type) {
    case "CHEAP": {
      return { cheap: true, fast: false, optimal: false };
    }
    case "FAST": {
      return { cheap: false, fast: true, optimal: false };
    }
    case "OPTIMAL": {
      return { cheap: false, fast: false, optimal: true };
    }
    default:
      return state;
  }
};
