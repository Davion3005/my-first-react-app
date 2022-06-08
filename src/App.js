import './App.css';
import Todo from "./components/Todo";

function App() {
    return (
        <div className="App">
            <h1>My Todos</h1>
            <Todo title='Learn' />
            <Todo title='Learn more' />
            <Todo title='Learn forever' />
        </div>
    );
}

export default App;
