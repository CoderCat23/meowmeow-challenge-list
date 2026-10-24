import List from './pages/list.js'; 
import Leaderboard from './pages/leaderboard.js';
import Roulette from './pages/roulette.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
