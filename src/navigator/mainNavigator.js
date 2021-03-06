import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList119581Navigator from '../features/ArticleList119581/navigator';
import ArticleList119580Navigator from '../features/ArticleList119580/navigator';
import ArticleList119579Navigator from '../features/ArticleList119579/navigator';
import SignIn22119578Navigator from '../features/SignIn22119578/navigator';
import Settings119563Navigator from '../features/Settings119563/navigator';
import Settings119539Navigator from '../features/Settings119539/navigator';
import UserProfile119532Navigator from '../features/UserProfile119532/navigator';
import Settings119531Navigator from '../features/Settings119531/navigator';
import Settings119529Navigator from '../features/Settings119529/navigator';
import SignIn2119527Navigator from '../features/SignIn2119527/navigator';
import Settings119511Navigator from '../features/Settings119511/navigator';
import Settings119492Navigator from '../features/Settings119492/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList119581: { screen: ArticleList119581Navigator },
ArticleList119580: { screen: ArticleList119580Navigator },
ArticleList119579: { screen: ArticleList119579Navigator },
SignIn22119578: { screen: SignIn22119578Navigator },
Settings119563: { screen: Settings119563Navigator },
Settings119539: { screen: Settings119539Navigator },
UserProfile119532: { screen: UserProfile119532Navigator },
Settings119531: { screen: Settings119531Navigator },
Settings119529: { screen: Settings119529Navigator },
SignIn2119527: { screen: SignIn2119527Navigator },
Settings119511: { screen: Settings119511Navigator },
Settings119492: { screen: Settings119492Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
