import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Listes_dossier() {
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
                        {"Listes des dossiers"}
                    </Text>
                    <View style={{
                        padding:20,
                        backgroundColor: "#e5e7e6",
                        alignItems: "center",
                        borderRadius: 10,
                        marginTop:-5,
                        marginBottom:-10,
                        marginLeft: 30,
                        marginRight: 250,
                    }}><Text style={{right:20,}}>Recherche</Text>
                        <Image source={require('../assets/chercher.png')} style={{  width: 20, height: 20, left:40, marginTop:-20, }} />
                    </View>
                    <TouchableOpacity>
                    <Image source={require('../assets/calendar-icon.png.png')} style={{  width: 40, height: 40, left:320,marginBottom:10 }} />
                    </TouchableOpacity>
                    
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#CFE8FF",
                            padding: 60,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button1}>
                                    <Text style={styles.buttonText}>Suivi Enfant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button1}>
                                    <Text style={styles.buttonText}>Modifier Dossier</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "#000000", fontSize: 15, alignItems: "center", marginLeft: -160, marginTop: -50, marginBottom: -10, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>Azer Mbarek {"\n"} {' '}
                                    <Text style={styles.boldText}>Poids:</Text> 10kg {"\n"} {' '}
                                    <Text style={styles.boldText}>Taille:</Text> 75 cm {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de consultation:</Text> {"\n"}{'        '}2024/09/11
                                </Text>
                                <Image source={require('../assets/garcon.png')} style={{ right: 220, marginTop: -60, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 60,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop:10,

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Suivi Enfant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Modifier Dossier</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "#000000", fontSize: 15, alignItems: "center", marginLeft: -160, marginTop: -50, marginBottom: -10, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>Lina Zakri {"\n"} {' '}
                                    <Text style={styles.boldText}>Poids:</Text> 9 kg {"\n"} {' '}
                                    <Text style={styles.boldText}>Taille:</Text> 70 cm {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de consultation:</Text> {"\n"}{'        '}2024/09/17
                                </Text>
                                <Image source={require('../assets/enfant (1).png')} style={{ right: 220, marginTop: -60, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 60,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop:10,

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Suivi Enfant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Modifier Dossier</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "#000000", fontSize: 15, alignItems: "center", marginLeft: -160, marginTop: -50, marginBottom: -10, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>Asil Heni {"\n"} {' '}
                                    <Text style={styles.boldText}>Poids:</Text> 11kg {"\n"} {' '}
                                    <Text style={styles.boldText}>Taille:</Text> 78 cm {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de consultation:</Text> {"\n"}{'        '}2024/11/15
                                </Text>
                                <Image source={require('../assets/enfant (1).png')} style={{ right: 220, marginTop: -60, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                    <Image source={require('../assets/new-folder-icon.png.png')} style={{  width: 55, height: 55, left:320, marginTop:70 }} />
                    </TouchableOpacity>
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

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#EB64B1',
        paddingVertical: 6,
        paddingHorizontal: 9,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 20,
        marginBottom: -90,
    },
    button1: {
        backgroundColor: '#64BDF9',
        paddingVertical: 6,
        paddingHorizontal: 9,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 20,
        marginBottom: -90,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 9,
    },
    boldText: {
        fontWeight: 'bold',
    },

});