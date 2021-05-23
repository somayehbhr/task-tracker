import { useReducer, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { TaskContextDispatch, TaskContext } from "./contexts/task.context";

const initialState = {
	list: [
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting at School",
			day: "Feb 6th at 1:30pm",
			reminder: true,
		},
	],
};

function reducer(state, action) {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				list: state.list.concat(action.payload),
			};
		case "REMOVE_TASK":
			return {
				...state,
				list: state.list.filter((task) => task.id !== action.payload.id),
			};
		case "TOGGLE_TASK_REMINDER":
			return {
				...state,
				list: state.list.map((task) => (task.id === action.payload ? { ...task, reminder: !task.reminder } : task)),
			};
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	// const name = 'Somayeh';
	// const [tasks, setTasks] = useState(initialState.list);

	// /**
	//  * deleting task
	//  * @param id
	//  */
	// const deleteTask = (id) => {
	// 	setTasks(tasks.filter((task) => task.id !== id));
	// };
	// /**
	//  * show reminder when click on task
	//  * @param id
	//  */
	// const toggleReminder = (id) => {
	// 	setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	// };
	// /**
	//  * Add task
	//  */
	// const addTask = (task) => {
	// 	setTasks(tasks.concat(task));
	// };
	return (
		<TaskContext.Provider value={state}>
			<TaskContextDispatch.Provider value={dispatch}>
				<div className="container">
					{/*<h1>Hello from react</h1>*/}
					{/*<h2>Hello {name}</h2>*/}
					<Header />
					<AddTask onAdd />
					<Tasks />
				</div>
			</TaskContextDispatch.Provider>
		</TaskContext.Provider>
	);
}

export default App;
