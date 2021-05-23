import Task from "./Task";
import { useTasks } from "../contexts/task.context";

const Tasks = ({ tasks, onDelete, onToggle }) => {
	const state = useTasks();

	return <>{state.list.length ? state.list.map((task) => <Task key={task.id} task={task} />) : "There is no task"}</>;
};
export default Tasks;
