import {
  DefaultPage,
  Layout
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
  ],
};
