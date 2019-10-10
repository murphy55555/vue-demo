import router from '@/router';
import CharacterDetail from './pages/CharacterDetail';
import CharacterSearch from './pages/CharacterSearch';
import CharacterCreate from './pages/CharacterCreate';
import CreateBasicInfo from './components/create/CreateBasicInfo';
import CreateAbilityScores from './components/create/CreateAbilityScores';
import ConfirmCreation from './components/create/ConfirmCreation';

router.addRoutes([{
  path: '/',
  name: 'characterSearch',
  component: CharacterSearch
},
{
  path: '/character/:characterName',
  name: 'characterDetail',
  props: true,
  component: CharacterDetail
},
{
  path: '/create-character',
  component: CharacterCreate,
  children: [
    {
      path: '',
      name: 'createBasicInfo',
      component: CreateBasicInfo
    },
    {
      path: 'abilities',
      name: 'createAbilityScores',
      component: CreateAbilityScores
    },
    {
      path: 'confirm',
      name: 'confirmCreation',
      component: ConfirmCreation
    }
  ]
}
]);