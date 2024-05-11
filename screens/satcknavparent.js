import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tabparent';
import Accueilparent from './accueilparent';
import Ajouter_redezvous from './ajouter_redezvous';
import Profilparent from './profilparent';
import Consult_doss_parent from './consult_doss_parent';
import Login from './login';
import Notification_parent from './notification_parent';
import Modif_rendezvous from './modif_rendezvous';
import Dossiershistorique from './dossiershistorique';




const Stack = createStackNavigator();

 export default function Stacknavparent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="TabNavigator"
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
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Notification_parent" component={Notification_parent} options={{ headerShown: true}} />
        <Stack.Screen name="Accueilparent" component={Accueilparent} options={{ headerShown: false }} />
        <Stack.Screen name="Ajouter_redezvous" component={Ajouter_redezvous} options={{ headerShown: true }} />
        <Stack.Screen name="Profilparent" component={Profilparent} options={{ headerShown: true }} />
        <Stack.Screen name="Consult_doss_parent" component={Consult_doss_parent} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Modif_rendezvous" component={Modif_rendezvous} options={{ headerShown: true }} />
        <Stack.Screen name="Dossiershistorique" component={Dossiershistorique} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

