import { FaTimes } from "react-icons/all";
import { useTaskDispatch } from "../contexts/task.context";

const Task = ({ task, onDelete, onToggle }) => {
	const dispatch = useTaskDispatch();

	function removeTask(id) {
		dispatch({
			type: "REMOVE_TASK",
			payload: id,
		});
	}

	function toggle(id) {
		dispatch({
			type: "TOGGLE_TASK_REMINDER",
			payload: id,
		});
	}
	return (
		<div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => toggle(task.id)}>
			<h3>
				{task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => removeTask(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
};
export default Task;
