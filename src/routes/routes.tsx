import { Route, Switch } from 'react-router-dom';
import { About, Dashboard, NoMatch } from './views';

type RouteType = {
  path: string;
  component: React.FC;
};

const routesArr: RouteType[] = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: NoMatch,
  },
];

const Routes = (): JSX.Element => (
  <Switch>
    {routesArr.map(({ path, component: Component }) => (
      <Route key={path} path={path} render={() => <Component />} />
    ))}
  </Switch>
);

export default Routes;
