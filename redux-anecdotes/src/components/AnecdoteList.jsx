import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  showNotification,
  hideNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  // use memoized selectors to make the warning in the console disappear,
  // instead of useSelector
  const anecdotes = useSelector((state) => {
    if (state.filter === "") {
      return [...state.anecdote].sort((a, b) => b.votes - a.votes);
    }
    return [...state.anecdote].filter((ane) =>
      ane.content.includes(state.filter),
    );
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));

    const notif = anecdotes.find((ane) => ane.id === id).content;
    dispatch(showNotification(`You voted '${notif}'`));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
