import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Consult_doss_parent() {
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
                    <Text style={{marginLeft: 285,opacity:0.5,marginTop:10,}}>2024/10/09</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 35,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                        <View>
                            
                            <View style={styles.Container1}>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center",  marginTop: -20, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom et Prenom:</Text> Asil Heni {"\n"}  {''}
                                    <Text style={styles.boldText}>Date de naissance:</Text> 2024/06/26 {"\n"}{'  '}
                                    <Text style={styles.boldText}>Poids(Kg): </Text> 10 Kg{"\n"}{'  '}
                                    <Text style={styles.boldText}>Taille(cm): </Text> 75 Cm{"\n"}{'  '}
                                    <Text style={styles.boldText}>Numero dossier médicale: </Text> 2216376
                                    
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{marginLeft: 285,opacity:0.5,marginTop:10,}}>2024/08/05</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 35,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                        <View>
                            
                            <View style={styles.Container1}>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center",  marginTop: -20, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom et Prenom:</Text> Asil Heni {"\n"}  {''}
                                    <Text style={styles.boldText}>Date de naissance:</Text> 2024/06/26 {"\n"}{'  '}
                                    <Text style={styles.boldText}>Poids(Kg): </Text> 8,5 Kg{"\n"}{'  '}
                                    <Text style={styles.boldText}>Taille(cm): </Text> 60 Cm{"\n"}{'  '}
                                    <Text style={styles.boldText}>Numero dossier médicale: </Text> 2216376
                                    
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
        textDecorationLine: 'underline',
        
    },

});