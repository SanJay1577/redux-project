import { useDispatch, useSelector } from "react-redux";
import { resolveQuery } from "../Reducers/QuerySlice";

export const Query = () => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task-component">
        <div>
          <h1>{query.allQuery}</h1>
          <h3>Query OverALL</h3>
        </div>
        <div>
          <h1>{query.resolved}</h1>
          <h3>Query resolved</h3>
          <button onClick={() => dispatch(resolveQuery())}>Complete</button>
        </div>
        <div>
          <h1>{query.remaining}</h1>
          <h3>Query Remaining</h3>
        </div>
      </div>
    </div>
  );
};
