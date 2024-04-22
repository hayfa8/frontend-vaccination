import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Initmdps3() {
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
                paddingBottom: 500,
               
            }}>
            <Text 
                style = {{
                    color: "#0D45A1",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginTop: 10,
                    marginBottom: 30,
                    bottom:10,
                }}>
                {"vous allez recevoir un code sur ce numero :+216*****179"}
            </Text>
            <View>
                <TouchableOpacity  style = {{
                    alignItems: "center",
                    backgroundColor: "#ED87EF",
                    borderRadius: 40,
                    paddingVertical: 10,
                    marginBottom: 31,
                    marginTop: 80,
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