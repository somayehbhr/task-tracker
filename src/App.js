import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	// const name = 'Somayeh';
	const [tasks, setTasks] = useState([
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
	]);

	/**
	 * deleting task
	 * @param id
	 */
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	/**
	 * show reminder when click on task
	 * @param id
	 */
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};
	/**
	 * Add task
	 */
	const addTask = (task) => {console.log(task);
	return (
		<div className="container">
			{/*<h1>Hello from react</h1>*/}
			{/*<h2>Hello {name}</h2>*/}
			<Header />
			<AddTask onAdd
			/>
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show!"}
		</div>
	);
}

export default App;
