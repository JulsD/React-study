import { SearchPage, MoviePage } from './pages';

const routes = [
    {
        path: '/',
        component: SearchPage,
        exact: true
    },
    {
        path: '/movie/:id',
        component: MoviePage
    },
    {
        path: '/search',
        component: SearchPage
    }
];

export default routes;