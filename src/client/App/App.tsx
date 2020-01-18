import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loader from '../components/loader/loader';

const List = React.lazy(() => import('../pages/List'));
const Edit = React.lazy(() => import('../pages/Edit'));

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
        <React.Suspense fallback={<Loader center={true} />}>
          <Switch>
            <Route path="/items" component={List} exact/>
            <Route path="/edit/:id" component={Edit} exact/>
            <Route path="*" exact>
              <Redirect to="/items"/>
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App;
