import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Initmdps4() {
    const [ IsPasswordShown, setIsPasswordShown] = React.useState(false);
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
            borderRadius: 20,
            pointerEvents: "none",
            
        }}>
        <View 
            style = {{
                backgroundColor: "#FEE0FF",
                paddingTop: 200,
                paddingBottom: 400,
               
            }}>
            <Text 
                style = {{
                    color: "#0D45A1",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginTop: 10,
                    marginBottom: 30,
                    bottom:10,
                }}>
                {"Écrivez s'il vous plaît votre nouveau mot de passe :"}
            </Text>
            <View 
                style = {{
                    backgroundColor: "#ffffff",
                    borderRadius: 30,
                    paddingVertical: 10,
                    paddingHorizontal: 27,
                    marginBottom: -30,
                    marginHorizontal: 33,
                    marginTop: 50,
                    opacity: 0.7,
                    bottom:5,
                }}>
                <TextInput
                    placeholder='Nouveau mot de passe'
                    style = {{
                        color: "#000000",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}>
                </TextInput>
            </View>
            <View 
                style = {{
                    backgroundColor: "#ffffff",
                    borderRadius: 30,
                    paddingVertical: 10,
                    paddingHorizontal: 27,
                    marginBottom: 20,
                    marginHorizontal: 33,
                    marginTop: 50,
                    opacity: 0.7,
                    bottom:5,
                }}>
                <TextInput
                    placeholder='Confirmez le mot de passe'
                    style = {{
                        color: "#000000",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}>
                </TextInput>
            </View>
            <View>
                <TouchableOpacity  style = {{
                    alignItems: "center",
                    backgroundColor: "#ED87EF",
                    borderRadius: 40,
                    paddingVertical: 10,
                    marginBottom: 31,
                    marginTop: 20,
                    marginHorizontal: 100,
                    opacity: 0.8,
                    bottom:5,
                    
                }}>
                    <Text 
                        style = {{
                        color: "#FFFFFF",
                        fontSize: 15,
                        fontWeight: "bold",
                        
                        }}>
                    {"OK"}
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