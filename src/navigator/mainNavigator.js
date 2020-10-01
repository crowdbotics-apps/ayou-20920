import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
