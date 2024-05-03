import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Accueilparent from './accueilparent';
import Notificationpar from './notificationparent';
import Ajouterrend from './ajouterrend';
import Listerend from './listerend';
import Suivivacc from './suivivacc';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        headerShown: false,
        tabBarStyle:{
            position:"absolute",
            bottom:0,
            right:0,
            left:0,
            height:60,
            backgroundColor:"white"
        }
    }}>
      <Tab.Screen
        name="Accueill"
        component={Accueilparent}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={27} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
      <Tab.Screen
        name="Ajouter"
        component={Ajouterrend}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus" size={25}  color={focused ? "#2578F5" : "black"}  />
          ),
          }}
      />
      <Tab.Screen 
        name="Notification" 
        component={Notificationpar}
        options={{
          title:"",
          tabBarIcon:() => {
            return (
            <View style={{
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#2578F5",
                height:70,
                width:70,
                top:-30,
                borderRadius:35,
                borderWidth:2,
                borderColor:"#ffffff",

            }}>
                <FontAwesome name="bell" size={22} color={"white"} />
            </View>
          )
        } 
    }}
      />
      <Tab.Screen
        name="Liste"
        component={Listerend}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="list-ul" size={20} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
      <Tab.Screen
        name="Suivie"
        component={Suivivacc}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="medical-bag" size={24}color={focused ? "#2578F5" : "black"} style={{}} />
          ),
          }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;