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
			console.log(action);
			return {
				...state,
				list: state.list.filter((task) => task.id !== action.payload),
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
const initialState2 = {
	name: "Ali",
	age: 25,
	mikh: "Somayeh",
	goldon: "Somayeh",
};
function reducer2(state = initialState2, action) {
	return { ...state, ...action };
}

function App() {
	const [state2, dispatch2] = useReducer(reducer2, initialState2);
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log("dispatch2", dispatch2);

	React.useEffect(() => {
		console.log("state2", state2);
	}, [state2.name, state2.age]); // if deps was empty, componentDidMount

	React.useEffect(() => {
		setTimeout(() => {
			dispatch2({
				name: "Optimize Prime",
			});
		}, 3000);
	}, []);

	return (
		<TaskContext.Provider value={state}>
			<TaskContextDispatch.Provider value={dispatch}>
				<div className="container">
					{/*<h1>Hello from react</h1>*/}
					{/*<h2>Hello {name}</h2>*/}
					<Header />
					<AddTask />
					<Tasks />
				</div>
			</TaskContextDispatch.Provider>
		</TaskContext.Provider>
	);
}

export default App;
