import AddUser from './layout/add-user';
import EditUser from './layout/edit-user';
import Home from './layout/home';
import Users from './layout/users';
import Vendors from './layout/vendors';

const Routes = {
  children: [
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
    },
  ],
  render: [
    {
      path: "/edit-user",
      exact: true,
      component: EditUser
    },
    {
      path: "/add-user",
      exact: true,
      component: AddUser
    },
  ]
}

export default Routes;