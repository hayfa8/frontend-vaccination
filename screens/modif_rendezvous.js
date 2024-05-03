import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, RadioForm, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Modif_rendezvous() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <ScrollView
                style={{
                    flex: 1,
                    borderRadius: 25,
                    pointerEvents: "none",


                }}>
                <View
                    style={{
                        backgroundColor: "#FEEEFF",
                        paddingTop: 50,
                        
                        paddingBottom: 500,
                        top: -10,


                    }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginLeft: 30,
                            marginBottom: 110,
                            marginTop: 20,
                            textDecorationLine: 'underline',
                        }}>
                        {"Ajouter un rendez-vous"}
                    </Text>


                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={styles.foufa}>Choisir l'enfant</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 32,
                        }}>
                            
                        <TextInput
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                                Asil Heni
                        </TextInput>
                        
                    </View>
                    <Text style={styles.foufa}>Choisir le médecin</Text>
                    <View style={styles.container}>
                        <TextInput
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                                DR Wafa
                            </TextInput>
                        
                    </View>
                    <Text style={styles.foufa}>Ajouter la date du rendez-vous</Text>
                    <View
                    
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                        <TextInput
                            placeholder='AAAA/MM/JJ'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                                2024/10/09
                        </TextInput>
                    </View>
                    <Text style={styles.foufa}>L'etat de l'enfant</Text>
                    
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                            
                        <TextInput
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                                
                            }}multiline={true}>
                                Urgent (fiévre)
                        </TextInput>
                        <Image source={require('../assets/ligne.png')} style={{marginLeft:240,width: 60, height: 60, marginTop:-25,marginBottom:5 }} />
                                <TouchableOpacity>
                                <Image source={require('../assets/envoyer.png')} style={{marginLeft:290,width: 20, height: 20,marginTop:-40 }} />
                                </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity>
                        <View
                            style={{
                                width: 200,
                                height: 40,
                                alignItems: "center",
                                backgroundColor: "#3EC27F",
                                borderRadius: 60,
                                paddingVertical: 10,
                                marginHorizontal: 80,
                                top: 20,
                                right: -20,
                            }}>
                            <Text
                                style={{
                                    color: "#fffbfb",
                                    fontSize: 13,
                                    fontWeight: "bold",
                                }}>
                                {"ENVOYER"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};
const options = [
    { value: 'femme' },
    { value: 'homme' },
];
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: -5,

    },
    selectedRadioCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#007bff',
    },
    foufa: {
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 70,
        bottom: 15,
        left: 34,


    },
    foufou: {
        marginRight: 10,
    },
    container: {
        backgroundColor: "#ffffff",
        borderColor: "#7776c7",
        borderRadius: 15,
        borderWidth: 1,
        paddingVertical: 11,
        paddingHorizontal: 7,
        marginBottom: 31,
        marginHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        flex: 1,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    itemText: {
        fontSize: 10,
        fontWeight: "bold",
        marginRight: 10,
    },
    icon: {
        color: "black",
    },
});



