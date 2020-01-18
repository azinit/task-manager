import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from '../pages/List';
import Edit from '../pages/Edit';

/**
 * Главный компонент сервиса
 * @remark
 * Содержит роутинг к страницам {@link pages/Link} и {@link pages/Edit}
 * @class App
 * @extends React.Component
 * @component
 * @author Азин И.А.
 * @see pages/Link
 * @see pages/Edit
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/items" component={List} exact/>
          <Route path="/edit/:id" component={Edit} exact/>
          <Route path="*" exact>
            <Redirect to="/items"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
