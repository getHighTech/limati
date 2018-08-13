import {
  DefaultPage,
  Layout,
  MyTeam,
  MyCenter,
  Service,
} from './';

export default {
  path: '/',
  name: 'Home',
  component: Layout,
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: '/teams', name: 'My team', component: MyTeam },
    { path: '/my', name: 'My center', component: MyCenter },
    { path: '/service', name: 'Service', component: Service },
  ],
};
