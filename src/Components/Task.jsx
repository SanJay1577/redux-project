import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculatePercentage,
  completeTask,
  setTask,
} from "../Reducers/TaskSlice";

export const Task = () => {
  const [taskCount, setTaskCount] = useState(0);
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();

  function setOverAllTask() {
    dispatch(setTask(taskCount));
  }

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter Task"
          value={taskCount}
          onChange={(e) => setTaskCount(e.target.value)}
        />{" "}
        <button onClick={setOverAllTask}>SetTask</button>
      </div>
      <div className="task-component">
        <div>
          <h1>{task.taskOverAll}</h1>
          <h3>Task OverALL</h3>
        </div>
        <div>
          <h1>{task.taskCompleted}</h1>
          <h3>Task Completed</h3>
          <button onClick={() => dispatch(completeTask())}>Complete</button>
        </div>
        <div>
          <h1>{task.taskRemaining}</h1>
          <h3>Task Remaining</h3>
        </div>
        <div>
          <h1>{task.taskPercentage}</h1>
          <h3>Task Percentage</h3>
          <button onClick={() => dispatch(calculatePercentage())}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};
