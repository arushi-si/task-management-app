import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_TASK } from "../utils/userSlice";
import { nanoid } from "nanoid";
import { useState } from "react";

function AddTask() {
  const dispatch = useDispatch();
  const { allTasks } = useSelector((store) => store.user);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    const res = new FormData(e.target);
    const formData = Object.fromEntries(res.entries());
    if (formData.addTaskInput) {
      dispatch(
        CREATE_TASK({
          task: formData.addTaskInput,
          id: nanoid(4),
          isCompleted: false,
        })
      );
      e.target.reset();
    } else {
      setIsInputEmpty(true);
      setTimeout(() => setIsInputEmpty(false), 2000);
    }
  };

  return (
    <main>
      <form id="input-section" onSubmit={handleAddTask}>
        <input
          id="addTaskInput"
          type="text"
          name="addTaskInput"
          placeholder="Enter your task here"
        />
        <button type="submit" className="task-btn">
          Add
        </button>
      </form>
      {isInputEmpty && <span id="add-task-error">Please enter a task!</span>}

      <ul>
        {allTasks.map((task) => (
          <Task key={task.id} taskData={task} />
        ))}
      </ul>
    </main>
  );
}

export default AddTask;
