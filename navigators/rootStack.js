
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/splash';
import { Login, Welcome,} from './screens';

const Stack = createNativeStackNavigator() ;
export default function RootStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
          name='spalsh'
          component={Splash}
          />
          <Stack.Screen
          name='Welcome'
          component={Welcome}
          />
          <Stack.Screen
          name='Login'
          component={Login}
          options={{HeaderShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };