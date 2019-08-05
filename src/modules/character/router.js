import router from '@/router';
import CharacterDetail from './pages/CharacterDetail';
import CharacterSearch from './pages/CharacterSearch';

router.addRoutes([{
  path: '/',
  name: 'characterSearch',
  component: CharacterSearch
},
{
  path: '/character/:characterName',
  name: 'characterDetail',
  component: CharacterDetail
}]);