import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,Button,Image,ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { FontAwesome } from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Accueilmed() {
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
            backgroundColor: "##FEEEFF",
            pointerEvents: "none",
            
        }}>
        <View style ={{
                        
                        marginTop: 50,
                    }}>
                        <Text 
                style = {{
                    color: "#000000",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginBottom: 30,
                    textDecorationLine: 'underline',
                }}>
                {"Accueil"}
            </Text>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Nombre Des Enfants</Text>
                            <Image
                                source={require('../assets/courbe.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>0 Enfants</Text>
                        </View>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Notre rendez-vous pour aujoured’hui</Text>
                            <Image/>
                            <Text style={styles.text}>1-</Text>
                        </View>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Notre vaccins pour aujoured’hui</Text>
                            <Text style={styles.text}>1-</Text>
                        </View>
                        </ImageBackground>
                    </View>
    </ScrollView>
</SafeAreaView>

);
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  rectangle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "column",
    
    flex: 1,
    marginHorizontal: 30,
    width:350,
    height:150,
    marginBottom: 20,
},
text: {
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 23,
    left:11,
},
text1:{
    color:"#ffffff",
    
    fontSize:15,
    marginBottom:10,
    fontWeight: "bold",
    left:11,
},
image: {
    width: 30,
    height: 30,
    marginBottom: 20,
    left:11,
    top:2,
},


});