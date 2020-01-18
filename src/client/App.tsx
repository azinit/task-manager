import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List from './pages/List';
import Edit from './pages/Edit';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/list" component={List} exact/>
          <Route path="/edit/:id" component={Edit} exact/>
          <Route path="*" exact>
            <Redirect to="/list"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
