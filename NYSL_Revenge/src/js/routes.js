
import HomePage from '../pages/home.vue';
import TeamsPage from '../pages/teams.vue';
import ResultsPage from '../pages/results.vue';
import LocationsPage from '../pages/locations.vue';
import ChatPage from '../pages/chat.vue';
import StatsPage from '../pages/stats.vue';
import PlayersPage from '../pages/players.vue';


var routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    path: '/teams/',
    component: TeamsPage,
  },
  {
    path: '/results/',
    component: ResultsPage,
  },
  {
    path: '/locations/',
    component: LocationsPage,
  },
  {
    path: '/chat/',
    component: ChatPage,
  },
  {
    path: '/stats/',
    component: StatsPage,
  },
  {
    path: '/players/',
    component: PlayersPage,
  },
];

export default routes;
