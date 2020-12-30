import Home from './layout/home';
import Users from './layout/users';
import Vendors from './layout/vendors';

const Routes = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/users",
    exact: true,
    component: Users
  },
  {
    path: "/vendors",
    exact: true,
    component: Vendors
  }
]

export default Routes;