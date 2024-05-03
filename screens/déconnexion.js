import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Déconnexion({ navigation }) {
  const handleLogout = () => {
    // Mettez ici le code pour déconnecter l'utilisateur
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Déconnexion</Text>
      <Text style={styles.message}>Êtes-vous sûr de vouloir vous déconnecter ?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ff5e78',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
