import * as React from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/index_screen';
import firebase from './src/objects/firebase'
import AccountScreen from './src/screens/account_screen';
import SignUpScreen from './src/screens/sign_up_screen';
import AccountsListProvider from './src/contexts/accountsListContext';

const screens = {


  SignUpScreen : {
    screen: SignUpScreen,
    navigationOptions:{
      title:'TITLE',
      headerStyle:{backgroundColor:'yellow'}
    }
    
  },
  IndexScreen : {
    screen: IndexScreen,
    navigationOptions:{
      title:'TITLE',
      headerStyle:{backgroundColor:'grey'}
    }
    
  },

  AccountScreen : {
    screen: AccountScreen,
    navigationOptions:{
      title:'TITLE',
      headerStyle:{backgroundColor:'orange'}
    }
    
  }
}

const navigator = createStackNavigator(screens, {
  initialRouteName:'SignUpScreen',
  defaultNavigationOptions:{
    title:'Default Title'
  }
});


const App = createAppContainer(navigator);

export default ()=>{
  firebase;
  return(
    <AccountsListProvider>
    
    <App />
    </AccountsListProvider>

  )
}



