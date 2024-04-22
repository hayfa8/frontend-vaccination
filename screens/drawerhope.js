import * as React from 'react';
import { StyleSheet, View ,SafeAreaView,Image,Text,TouchableOpacity,TextInput,DrawerContentScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItem,DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from './accueiladmin';
import ComptesMédecins from './comptesmédecins';
import ComptesParents from './comptesparents';
import Déconnexion from './déconnexion';
import GestionCo from './gestioncompte';
import GestionVacc from './gestionvaccin';
import { FontAwesome5,FontAwesome ,Entypo} from '@expo/vector-icons';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';



const Drawer = createDrawerNavigator();

export default function DrawerH() {
  const [isComptesOpen, setIsComptesOpen] = React.useState(false);
  return (
    <NavigationContainer>
      <Drawer.Navigator
       drawerContent={(props) => { 
        return (
          <SafeAreaView>
            <View 
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height:220,
              width:'100%',
              flex:1,
              position:"relative"
            }}
            >
            <View
              style={{
                  marginTop:40,
                }}>
               <Image 
               source={require('../assets/Avatar.png')}
               style={{
                height:130,
                width:130,
                borderRadius:65,
                right:90,
                top:10,
               
               }}
               />
               <View>
               <Text 
               style={{
                  bottom:110,
                  left:50,
                  fontSize:20,
                  fontWeight: 580,
               }}> Administrateur</Text>
                <Text 
                  style={{
                    bottom:65,
                    left:60,
                    fontSize:15,
                    fontWeight: 490,
                    color:' rgb(0, 0, 0, 60%)',
               }}> Chef de Projet </Text>
                <Image
                  source={require('../assets/médaille.png')}
                  style={{height:27,width:27,bottom:75, left:175}} />
               </View>
               </View>
            </View>
          
           <DrawerItemList {...props} />
           <TouchableOpacity  onPress={() => setIsComptesOpen(!isComptesOpen)}>
            <Text style={{
             fontWeight:"bold", fontSize:18, marginLeft:35, marginBottom:1, bottom:180,
            }}>Gestion comptes</Text>
           {isComptesOpen && (
            <View>
              <DrawerItem
                label="Comptes parents"
                icon={({ color, size }) => <FontAwesome5 name="user" size={17} style={{ left: 255, bottom: 160 }} />}
                onPress={() => props.navigation.navigate('ComptesParents')}
                style={{ marginLeft: 50, marginBottom: 10 }}
              />
              <DrawerItem
                label="Comptes médecins"
                icon={({ color, size }) => <FontAwesome5 name="user-md" size={17} style={{ left: 274, bottom: 160 }} />}
                onPress={() => props.navigation.navigate('ComptesMédecins')}
                style={{ marginLeft: 63 }}
              />
            </View>
        )}
      </TouchableOpacity>
          </SafeAreaView>
        )
      }}
      screenOptions={{
          headerStyle:{
            backgroundColor:"#fff7fc"
          },
          
          drawerStyle: {
            backgroundColor: 'rgba(254, 39, 126, 0.38)',
            width: 350,
            
        },
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: 'black',
          drawerActiveBackgroundColor: 'transparent',
          drawerType: 'permanent',
          
          headerRight: () => (
          <View 
          style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <FontAwesome name="bell" size={22} color="#635F5F" style={{left:30}} />
              </TouchableOpacity>
              <View style={styles.container}>
               <Icon name="search" type="font-awesome" color="#635F5F" size={18} />
                <TextInput
                style={styles.input}
                placeholder=" Rechercher..."
                />
              </View>
              <View style={{
                flexDirection:"row",
                alignItems: 'center',
              }}>
                <TouchableOpacity>
                <Image
                  source={require('../assets/Avatar.png')} 
                  style={{
                  width:50,
                  height:50,
                  borderRadius:65,
                  right:110,
                  }}
                   />
                </TouchableOpacity>
                <Text style={{
                  fontSize:15,
                  right:105,
                  
                }}>Administrateur</Text>
                <TouchableOpacity>
                <Image  
                  source={require('../assets/fleche.png')}
                  style={{ top:2, height:15, width:15,right:100}}
                  />
                </TouchableOpacity>
              </View>
          </View>
          ),
          headerLeft: () => (
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/logoo.png')} 
                style={{height:50,width:55,left:20,}}
                    /> 
            </View>
            ),
        }}>
      
      <Drawer.Screen name="Accueil" component={Accueil} options={{
        
        drawerLabel:"Accueil",
        title:"",
        headerShadowVisible: false,
        drawerLabelStyle: {
          right:45,
          fontSize: 18,
          fontWeight:"bold",
          marginLeft:30,
          marginBottom:10,
        },
        drawerIcon: ({color, size, focused}) => (
          <Entypo name="home" size={26} style={{flex:0,position:"absolute", marginLeft:250,}}/>
        ),

      }} 
      />
      <Drawer.Screen name="Gestion Vaccins"
       component={GestionVacc} 
        options={{
        drawerLabel:"Gestion Vaccin",
        title:"",
        headerShadowVisible: false,
        drawerLabelStyle: {
          right:45,
          fontSize: 18,
          fontWeight:"bold",
          marginLeft:30,
          marginBottom:10,
  
        },
        drawerIcon: ({color, size, focused}) => (
          <MaterialCommunityIcons name="needle" size={30} style={{flex:0,position:"absolute", marginLeft:250,  }} />
        )
        
      }} />
      <Drawer.Screen 
      name="Gestion Comptes" 
      component={GestionCo} 
      options={() => ({
      drawerLabel:"",
      title:"",
      drawerLabelStyle: {
        right:45,
        fontSize: 18,
        fontWeight:"bold",
        marginLeft:30,
        marginBottom:10,
        
      },
      headerShadowVisible: false,
      drawerIcon: ({color, size}) => (
      <FontAwesome5 name="user-alt" size={22} style={{flex:0,position:"absolute", marginLeft:250 ,color:"white"}} />
    ),
    isComptesOpen
    
  })}
  
/>
        <Drawer.Screen name="ComptesParents"  component={ComptesParents} options={{
          drawerLabel: "" ,
          title: "",  }} />
        <Drawer.Screen name="ComptesMédecins" component={ComptesMédecins} options={{
        drawerLabel: "",
        title: "",
        drawerLabelStyle: {
        marginBottom: 20, 
       
        },
        }} />
     
    
      <Drawer.Screen name="Déconnexion" component={Déconnexion}options={{
        drawerLabel:"Déconnexion",
        title:"",
        headerShadowVisible: false,
        drawerLabelStyle: {
          right:45,
          fontSize: 18,
          fontWeight:"bold",
          marginLeft:30,
         
        },
        drawerIcon: ({color, size}) => (
          <FontAwesome name="sign-out" size={25} style={{flex:0,position:"absolute", marginLeft:253, }} />
        )
        
      }} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  hayfa:{
      width:10,
      height:10,
  },
  admin:{
    textAlign:"left",
    verticalAlign:"top",
    fontWeight:"semi bold",
    fontSize:27,
    color:"black",
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff7fc',
    opacity:1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:"white",
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    right:600,
  },
  input: {
    flex: 1,               
    height: 40,
    color: '#635F5F',
    marginLeft: 10,
  },
});