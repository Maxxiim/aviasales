const transfer = [
  { id: 0, name: "all", check: false },
  { id: 1, name: "no_transfer", check: false },
  { id: 2, name: "one_transfer", check: false },
  { id: 3, name: "two_transfer", check: false },
  { id: 4, name: "three_transfer", check: false },
];

export const transferReducer = (state = transfer, action) => {
  switch (action.type) {
    case "all": {
      return state.map((item) => ({ ...item, check: action.payload }));
    }
    case "no_transfer": {
      return state.map((item) =>
        item.name === "no_transfer"
          ? { ...item, check: action.payload ?? !item.check }
          : item,
      );
    }
    case "one_transfer": {
      return state.map((item) =>
        item.name === "one_transfer"
          ? { ...item, check: action.payload ?? !item.check }
          : item,
      );
    }
    case "two_transfer": {
      return state.map((item) =>
        item.name === "two_transfer"
          ? { ...item, check: action.payload ?? !item.check }
          : item,
      );
    }
    case "three_transfer": {
      return state.map((item) =>
        item.name === "three_transfer"
          ? { ...item, check: action.payload ?? !item.check }
          : item,
      );
    }

    case "update_all_only": {
      return state.map((item) =>
        item.name === "all" ? { ...item, check: action.payload } : item,
      );
    }
    default:
      return state;
  }
};
