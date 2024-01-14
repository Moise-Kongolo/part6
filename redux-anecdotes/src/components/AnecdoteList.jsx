import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  // use memoized selectors to make the warning in the console disappear,
  // instead of useSelector
  const anecdotes = useSelector((state) =>
    [...state].sort((a, b) => b.votes - a.votes),
  );

  const vote = (id) => {
    dispatch(addVote(id));
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