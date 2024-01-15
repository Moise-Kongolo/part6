const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return action.payload.value;
    default:
      return state;
  }
};

// action creator
export const filterChange = (value) => {
  return {
    type: "FILTER",
    payload: { value },
  };
};

export default filterReducer;
