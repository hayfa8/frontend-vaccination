import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Listes_rdv_parent() {
    const [IsPasswordShown, setIsPasswordShown] = React.useState(true);
    const onPress = () => { navigation.goBack(); };
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#F2F2F2",


                }}>
                <View
                    style={{
                        backgroundColor: "#F2F2F2",
                        paddingTop: 60,
                        paddingBottom: 500,


                    }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginLeft: 30,
                            marginBottom: 30,
                            textDecorationLine: 'underline',
                        }}>
                        {"Liste des rendez-vous"}
                    </Text>
                    <Text style={{marginLeft: 320,opacity:0.5,marginTop:10,}}>Dr Wafa</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#9ADFBC",
                            padding: 15,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                        <View>
                            <View>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginTop: 5, opacity: 1, }}>
                                     Votre date de rendez-vous 2024/10/09 pour Asil Heni et <Text style={styles.boldText}>VALIDER</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{marginLeft: 40,opacity:0.5,marginTop:10,}}>Moi</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 30,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                        <View>
                            
                            <View style={styles.Container1}>
                            <Image source={require('../assets/bouton-modifier.png')} style={{ right: -280, width: 20,marginTop: -60, height: 20,  }} />
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginLeft: 30, marginTop: -20, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>  Asil Heni {"\n"}  {''}
                                    <Text style={styles.boldText}>Létat de l’enfant:</Text> Urgent (fiévre) {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de rendez-vous:</Text> 2024/10/09
                                    
                                </Text>
                                <Image source={require('../assets/enfant (1).png')} style={{ right: 280, marginTop: -30, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                        </View>
                    </View>
                    <Text style={{marginLeft: 320,opacity:0.5,marginTop:10,}}>Dr Wafa</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#F4999F",
                            padding: 15,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                        <View>
                            <View>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginTop: -15, opacity: 1, }}>
                                    Votre date de rendez-vous 2024/10/20 pour Asil Heni et <Text style={styles.boldText}>Annuler</Text>{"\n"}{"\n"}<Text style={styles.boldText}>Note:</Text> Notre calandrier et complet. 
voici votre proposition des nouveau  dates: 2024/11/03 - 2024/11/06
  
                                </Text>
                            </View>
                        </View>
                    </View>
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
        flexDirection: 'column',
    },

    Container1: {

        alignItems: 'center',
        flexDirection: 'row',
    },
    boldText: {
        fontWeight: 'bold',
        
    },

});