import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import TodoList from './components/todo-list/todo-list';
import { ITask } from './interfaces';
import TodoHeader from './components/todo-header/todo-header';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([
    {id: 0, title: 'Завершить тестовое', completed: false},
    {id: 1, title: 'Проверить MR', completed: false},
    {id: 2, title: 'Поправить автодоку', completed: true},
  ])

  return (
    <div className='wrapper'>
      <TodoHeader/>
      <TodoList classes="app__todo-list" tasks={tasks}/>
    </div>
  );
}

export default App;
