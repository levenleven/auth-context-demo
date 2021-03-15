import { Route, Switch } from 'react-router-dom';

import { FunctionalComponent } from './pages/Functional';
import { ClassComponent } from './pages/Class';

export const RouterSwitch = () => (
  <Switch>
    <Route exact path="/">
      <FunctionalComponent />
    </Route>
    <Route path="/class-component">
      <ClassComponent />
    </Route>
  </Switch>
);
