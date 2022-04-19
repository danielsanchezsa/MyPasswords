import * as React from 'react';
import firebase from './src/objects/firebase'
import SignUpScreen from './src/screens/sign_up_screen';
import AccountsListProvider from './src/contexts/accountsListContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from "./src/screens/index_screen";
import AccountScreen from "./src/screens/account_screen";
import { navigationRef } from './src/objects/rootNavigation';


const Stack = createNativeStackNavigator();

function SignInScreen({navigation}){
  return(<SignUpScreen nav={navigation}></SignUpScreen>)
}

function IndexScreenF(){
  return(<IndexScreen></IndexScreen>)
}

function AccountScreenF(props){
return(<AccountScreen >{props}</AccountScreen>)
}




const App = ()=>{
  firebase;
  return(
    
    <AccountsListProvider>

      <NavigationContainer ref={navigationRef}>

        <Stack.Navigator initialRouteName='index'>

          <Stack.Screen name='sign in' component={ SignInScreen}/>
          <Stack.Screen name='index' component={ IndexScreenF}/>
          <Stack.Screen name='account' component={ AccountScreenF}/>

         
        
        </Stack.Navigator>
     
      </NavigationContainer>
    
   
    </AccountsListProvider>

  )

}


export default App;



