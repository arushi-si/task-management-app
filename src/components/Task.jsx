import { useDispatch } from "react-redux";
import { DELETE_TASK, EDIT_TASK } from "../utils/userSlice";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

function Task({ taskData }) {
  const { task, id, isCompleted } = taskData;
  const [showEditInput, setShowEditInput] = useState(false);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const res = new FormData(e.target);
    const formData = Object.fromEntries(res.entries());
    if (formData.input) {
      dispatch(EDIT_TASK({ id, task: formData.input }));
      setShowEditInput(false);
    } else {
      alert("Input field cannot be empty!");
    }
  };

  return (
    <li className="task">
      {showEditInput ? (
        <form id="edit-task-form" onSubmit={handleFormSubmit}>
          <input
            defaultValue={task}
            id="edit-task-input"
            type="text"
            name="input"
          />
          <div>
            <button type="submit" className="task-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowEditInput(false)}
              className="task-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className={isCompleted ? "completed-task" : undefined}>
            <input
              className="checkbox"
              type="checkbox"
              name="isTaskCompleted"
              onChange={(e) =>
                dispatch(EDIT_TASK({ id, isCompleted: e.target.checked }))
              }
              checked={isCompleted}
            />
            {task}
          </div>
          <div>
            <FaRegEdit
              onClick={() => !isCompleted && setShowEditInput(true)}
              className={`icon ${isCompleted ? "disabled-icon" : undefined}`}
            />
            <FaTrashAlt
              className="icon"
              onClick={() => dispatch(DELETE_TASK(id))}
            />
          </div>
        </>
      )}
    </li>
  );
}

export default Task;
