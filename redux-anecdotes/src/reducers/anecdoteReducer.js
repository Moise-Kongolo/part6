const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteReducer = (state = initialState, action) => {
  if (action.type === "VOTE") {
    return state.map((ane) => {
      if (ane.id === action.payload.id) {
        return { ...ane, votes: ane.votes + 1 };
      }
      return ane;
    });
  }

  if (action.type === "CREATE") {
    return state.concat(action.payload);
  }

  return state;
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return action.payload.value;
    default:
      return state;
  }
};

//action creators
export const addVote = (id) => {
  return { type: "VOTE", payload: { id } };
};

export const createAnecdote = (anecdote) => {
  return {
    type: "CREATE",
    payload: { content: anecdote, id: getId(), votes: 0 },
  };
};

export const filterChange = (value) => {
  return {
    type: "FILTER",
    payload: { value },
  };
};

export default anecdoteReducer;
