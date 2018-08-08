// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Login,
} from './';

export default {
  path: 'login',
  name: 'Login',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/login', name: 'Login', component: Login },
  ],
};
