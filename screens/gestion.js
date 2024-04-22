import * as React from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Gestion({navigation}) {
  const [isComptesOpen, setIsComptesOpen] = React.useState(false);
  
  return (
    <View>
      <TouchableOpacity onPress={() => setIsComptesOpen(!isComptesOpen)}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 35, marginBottom: 1, bottom: 180 }}>Gestion comptes</Text>
      </TouchableOpacity>
      {isComptesOpen && (
        <View>
          <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={() => navigation.navigate('ComptesParents')}>
            <FontAwesome5 name="user" size={17} style={{ left: 255, bottom: 160 }} />
            <Text style={{ fontWeight: "bold", bottom: 180, marginLeft: 50, fontSize: 16 }}>Comptes parents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 8, right: 3 }} onPress={() => navigation.navigate('ComptesMédecins')}>
            <FontAwesome5 name="user-md" size={17} style={{ left: 274, bottom: 160 }} />
            <Text style={{ fontWeight: "bold", bottom: 180, marginLeft: 63, fontSize: 16 }}>Comptes médecins</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
