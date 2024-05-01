import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginadmin from './loginadmin';
import DrawerH from './drawerhope';
import Listevaccins from './listevaccins';
import Consultervacc from './consultervacc';

const Stack = createNativeStackNavigator();

export default function Rout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loginadmin"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent'
          },
          headerTitle: '',
          headerTransparent: true,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          }
        }}>
        <Stack.Screen
          name='Loginadmin'
          component={Loginadmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DrawerH'
          component={DrawerH}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Listevaccins'
          component={Listevaccins}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen
          name='Consultervacc'
          component={Consultervacc}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
