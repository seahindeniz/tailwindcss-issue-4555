import type { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, About, NoMatch } from './views';

type RouteType = {
  path: string;
  exact?: boolean;
  component: React.FC<RouteTypeWithRoutes>;
};

type RouteTypeWithRoutes = {
  routes?: RouteType[];
};

type RootRouteType = RouteType & RouteTypeWithRoutes;

const routesArr: RootRouteType[] = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/about',
    component: About,

    routes: [
      {
        path: '/tacos/bus',
        component: NoMatch,
      },
      {
        path: '/tacos/cart',
        component: NoMatch,
      },
    ],
  },
  {
    path: '*',
    component: NoMatch,
  },
];

const RouteWithSubRoutes: React.FC<RootRouteType> = ({
  path,
  routes,
  exact,
  component: Component,
}): ReactElement => (
  <Route
    path={path}
    exact={exact}
    render={props => <Component {...props} routes={routes} />}
  />
);
const Routes: React.FC = () => {
  return (
    <Switch>
      {routesArr.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
