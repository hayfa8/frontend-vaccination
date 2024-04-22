import React from "react";
import { View,Text,StyleSheet } from "react-native-web";


export default function Déconnexion() {
   
    return(
        <View styles={styles.container}>
            <Text styles={styles.text}>Déconnexion</Text>
        </View>
    );
    
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginbottom:10,
    },
 
});
