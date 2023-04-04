import './App.css';
import { AddTodo } from './components/AddTodo';
import { TodoLists } from './components/TodoLists';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Typography variant="h3">Todo App</Typography>
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;
