import './App.css';
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import Task from './components/Task';

 

function App() {
  return (
    <div className="App">
     <h1>Todo list with redux </h1>
      <AddTask />
      <ListTask/>
      <Task/>
    </div>
  );
}

export default App;
