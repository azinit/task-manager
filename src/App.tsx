import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/List';
import Edit from './pages/Edit';
import { ITask } from './interfaces';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([
    { id: 0, title: 'Завершить тестовое' },
    { id: 1, title: 'Проверить MR' },
    { id: 2, title: 'Поправить автодоку' },
  ])

  function add(title: string) {
    setTasks([...tasks, {
        title,
        id: tasks.length,
    }])
  }

  function remove(id: number) {
      setTasks(tasks.filter(task => task.id !== id));
  }

  function edit(editedTask: ITask) {
      setTasks(tasks.map(task => {
          if (task.id == editedTask.id) {
              task.title = editedTask.title;
          }
          return task;
      }))
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={List} exact/>
          <Route path="/list" component={List} exact/>
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
