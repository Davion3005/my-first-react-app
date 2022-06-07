import './App.css';
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
    return (
        <div className="App">
            <h1>My Todos</h1>
            <Todo title='Learn' />
            <Todo title='Learn more' />
            <Todo title='Learn forever' />
            <Modal />
            <Backdrop />
        </div>
    );
}

export default App;
