import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Consult_rendezvous() {
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
                        {"Consulter rendez-vous"}
                    </Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/calendar-icon.png.png')} style={{ width: 40, height: 40, left: 320, marginBottom: 30,marginTop:-10 }} />
                    </TouchableOpacity>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 45,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Valider</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginLeft: -120, marginTop: -40, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>  Asil Heni {"\n"}  {''}
                                    <Text style={styles.boldText}>Létat de l’enfant:</Text> Urgent (fiévre) {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de rendez-vous:</Text> 2024/10/09
                                </Text>
                                <Image source={require('../assets/enfant (1).png')} style={{ right: 280, marginTop: -50, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                            <View style={{ backgroundColor: "#F4BCE1", borderColor: 'black',  borderRadius: 30, marginLeft: -10, marginRight: -20, marginTop: 10 }}>
                                <Text
                                    style={{ color: "#000000", fontSize: 11, marginTop: 5,marginLeft:20, marginBottom: -1,textDecorationLine: 'underline',fontWeight: "bold", opacity: 0.6 , }}>
                                    {"Note"}
                                </Text>
                                <Image source={require('../assets/ligne.png')} style={{marginLeft:220,width: 30, height: 30,  }} />
                                <TouchableOpacity>
                                <Image source={require('../assets/envoyer.png')} style={{marginLeft:250,width: 20, height: 20,marginTop:-25 }} />
                                </TouchableOpacity>
                                <TextInput placeholder=''
                                style={{color: "#000000",fontSize: 12,marginLeft:25, marginTop:-15}}
                                multiline={true}>
                                    <Text>.C’est un effet latéral du vaccin</Text>
                                </TextInput>
                                
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#CFE8FF",
                            padding: 45,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop:10,

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button2}>
                                    <Text style={styles.buttonText}>Valider</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button3}>
                                    <Text style={styles.buttonText}>Annuler</Text>
                                </TouchableOpacity>
                                
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginLeft: -165, marginTop: -40, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>  Azer Mbarek {"\n"}  {''}
                                    <Text style={styles.boldText}>Létat de l’enfant:</Text> stable {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de rendez-vous:</Text>2024/10/23
                                </Text>
                                <Image source={require('../assets/garcon.png')} style={{ right: 280, marginTop: -50, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                            <View style={{ backgroundColor: "#B6DDF9", borderColor: 'black',  borderRadius: 30, marginLeft: -10, marginRight: -20, marginTop: 10 }}>
                                <Text
                                    style={{ color: "#000000", fontSize: 11, marginTop: 5,marginLeft:20, marginBottom: -1,textDecorationLine: 'underline',fontWeight: "bold", opacity: 0.6 , }}>
                                    {"Note"}
                                </Text>
                                <Image source={require('../assets/ligne.png')} style={{marginLeft:220,width: 30, height: 30,  }} />
                                <TouchableOpacity>
                                <Image source={require('../assets/envoyer.png')} style={{marginLeft:250,width: 20, height: 20,marginTop:-25 }} />
                                </TouchableOpacity>
                                <TextInput placeholder=''
                                style={{color: "#000000",fontSize: 10,marginLeft:25, marginTop:-15}}>
                                </TextInput>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 45,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop:10,

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button1}>
                                    <Text style={styles.buttonText}>Annuler</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginLeft: -120, marginTop: -40, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text>  Lina Zakri {"\n"}  {''}
                                    <Text style={styles.boldText}>Létat de l’enfant:</Text> stable  {"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de rendez-vous:</Text>2024/10/28
                                </Text>
                                <Image source={require('../assets/enfant (1).png')} style={{ right: 280, marginTop: -50, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                            <View style={{ backgroundColor: "#F4BCE1", borderColor: 'black',  borderRadius: 30, marginLeft: -10, marginRight: -20, marginTop: 10 }}>
                                <Text
                                    style={{ color: "#000000", fontSize: 11, marginTop: 5,marginLeft:20, marginBottom: -1,textDecorationLine: 'underline',fontWeight: "bold", opacity: 0.6 , }}>
                                    {"Note"}
                                </Text>
                                <Image source={require('../assets/ligne.png')} style={{marginLeft:220,width: 30, height: 30,  }} />
                                <TouchableOpacity>
                                <Image source={require('../assets/envoyer.png')} style={{marginLeft:250,width: 20, height: 20,marginTop:-25 }} />
                                </TouchableOpacity>
                                <TextInput placeholder=''
                                style={{color: "#000000",fontSize: 10,marginLeft:25, marginTop:-15}}
                                    multiline={true}
                                    numberOfLines={3}>
                                    <Text>.Notre calandrier et complet. 
voici votre nouveau date de rendez-vous: 2024/11/09.</Text>
                                </TextInput>
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

    buttonContainer: {

        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#3EC27F',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 90,
        marginBottom: -200,
    },
    button1: {
        backgroundColor: '#F96464',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 90,
        marginBottom: -220,
    },
    button3: {
        backgroundColor: '#F96464',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 10,
        marginBottom: -200,
    },
    button2: {
        backgroundColor: '#3EC27F',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 50,
        marginBottom: -200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
    boldText: {
        fontWeight: 'bold',
    },

});