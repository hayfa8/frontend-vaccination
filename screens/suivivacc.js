import React from 'react';
import { View, Text, StyleSheet,StatusBar,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Header() {
  return (
    <View style={headerStyles.container}>
        <StatusBar  backgroundColor="#FEE0FF" barStyle="dark-content" hidden={false} />
      <Text style={headerStyles.title}></Text>
      <View style={{flexDirection:"row"}}>
      <Image source={require('../assets/logoo.png')}
                style={{ height: 45, width: 50, right:125,bottom:3,}}/>
      <TouchableOpacity>
      <Image
                  source={require('../assets/avatara.jpg')}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 65,
                    bottom:3,
                    left:120
                }}
                />
        </TouchableOpacity>
        </View>
    </View>
  );
}


export default function Suivivacc() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>suivievacc</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    backgroundColor: '#FEE0FF',
    justifyContent: 'center',
    alignItems: 'center',
    bottom:351,
    borderWidth:0.5,
    borderColor:"#CACAD2"
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
