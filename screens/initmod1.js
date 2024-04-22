import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Initmdps1() {
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
                    color: "#0d49ae",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginTop: 10,
                    bottom:10,
                    marginBottom: 100,
                }}>
                {"Veuillez entrer votre numéro de téléphone pour rechercher votre compte:"}
            </Text>
            <View 
                style = {{
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    paddingVertical: 14,
                    paddingHorizontal: 27,
                    marginBottom: 20,
                    marginHorizontal: 33,
                    marginTop: 10,
                    bottom:10,
                    opacity: 0.7,
                }}>
                <TextInput
                    placeholder='Numéro mobile'
                    keyboardType="numeric"
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
                    marginTop: 50,
                    marginHorizontal: 100,
                    opacity: 0.8,
                    bottom:7,
                    
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