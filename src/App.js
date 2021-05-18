import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	// const name = 'Somayeh';
	return (
		<div className="container">
			{/*<h1>Hello from react</h1>*/}
			{/*<h2>Hello {name}</h2>*/}
			<Header />
			<Tasks />
		</div>
	);
}

export default App;
