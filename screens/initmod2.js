import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,Button,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { FontAwesome } from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Initmdps2() {
    const [ IsPasswordShown, setIsPasswordShown] = React.useState(true);
    const onPress = () => {navigation.goBack();};
  return (
    <SafeAreaView 
    style = {{
        flex: 1,
        
    }}>
        <StatusBar  backgroundColor="white" barStyle="dark-content" />
    <ScrollView  
        style = {{
            flex: 1,
            backgroundColor: "#ffffff",
            pointerEvents: "none",
            
        }}>
        <View 
            style = {{
                backgroundColor: "#FEE0FF",
                paddingTop: 200,
                paddingBottom: 500,
               
            }}>
            <Text 
                style = {{
                    color: "#0D45A1",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginBottom: 100,
                }}>
                {"Cette compte correspondent à votre recherche:"}
            </Text>
            <View 
            style={{ 
                    borderWidth: 1, 
                    backgroundColor: "#fff7fc",
                    borderColor: 'black', 
                    padding: 10,
                    borderRadius: 15,
                    marginLeft: 40, 
                    marginRight:40,
                    
                    flexDirection:"row"
                    }}>
                <Text 
                        style = {{
                    color: "#000000",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 100,
                    marginTop: 10,
                    marginBottom: 10,
                    opacity: 1,
                  
                }}>
                    {"Hayfa Mansour"}
                </Text>
                <Image source={require('../assets/hayfa.jpg')}  style={{right:200, width:50, height:50, borderRadius:50}} />
                
                
            </View>
            
                <View>
                <TouchableOpacity  style = {{
                    alignItems: "center",
                    backgroundColor: "#ED87EF",
                    borderRadius: 40,
                    paddingVertical: 10,
                    marginBottom: 31,
                    marginTop: 70,
                    marginHorizontal: 100,
                    opacity: 0.8,
                    
                }}>
                    <Text 
                        style = {{
                        color: "#FFFFFF",
                        fontSize: 15,
                        fontWeight: "bold",
                        
                        }}>
                    {"Suivant"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
</SafeAreaView>

);
};
 

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },


});