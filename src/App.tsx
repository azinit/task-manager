import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/List';
import Edit from './pages/Edit';
import { ITask } from './interfaces';

const App: React.FC = () => {
  const [tasks] = React.useState<ITask[]>([
    { id: 0, title: 'Завершить тестовое' },
    { id: 1, title: 'Проверить MR' },
    { id: 2, title: 'Поправить автодоку' },
  ])

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
