import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="app-container">
      <h1 className= "tittle">Todo App</h1>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
