import SignIn from './components/SignIn.vue';
const Users = resolve => {
  require.ensure('./components/Users.vue', () => {
    resolve(require('./components/Users.vue'));
  });
};
const Articles = resolve => {
  require.ensure('./components/Articles.vue', () => {
    resolve(require('./components/Articles.vue'));
  });
};
const Settings = resolve => {
  require.ensure('./components/Settings.vue', () => {
    resolve(require('./components/Settings.vue'));
  });
};
const Profile = resolve => {
  require.ensure('./components/Profile.vue', () => {
    resolve(require('./components/Profile.vue'));
  });
};

export const routes = [
  { path: '/', name: 'signIn', component: SignIn },
  { path: '/users', name: 'users', component: Users },
  { path: '/articles', name: 'articles', component: Articles },
  { path: '/settings', name: 'settings', component: Settings },
  { path: '/profile', name: 'profile', component: Profile }
];
