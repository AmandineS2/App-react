import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu } from 'react-native-paper';
import axios from "axios";

function Header() {
  return (
    <View style={{ height: 427, width: 1500, top:-310, alignItems: 'center', justifyContent: 'center', backgroundColor: '#107EA7' }}>
      <Text style={{ top: 110 }}>Mon En-tête</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ top: 54, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#47567B' }}>
      <Header />
      <Image
        style={{width: 100, height: 100}}
        source={{uri: '../assets/coin!.png'}}/>
      <Text style={{ top: -94 }}>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => console.log('Bouton 1 cliqué!')}>
          <Text style={styles.buttonText}>Personnages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => console.log('Bouton 2 cliqué!')}>
          <Text style={styles.buttonText}>Filtrer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ top: 54, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#47557B' }}>
      <Header />
      <Text style={{ top: -94 }}>Recherche</Text>
    </View>
  );
}

function SearchScreenProfil() {
  return (
    <View style={{ top: 54, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#47557B' }}>
      <Header />
      <Text style={{ top: -94 }}>Recherche</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Recherche" component={SearchScreen} />
      <Tab.Screen name="Profil" component={SearchScreenProfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button1: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: '45%',
    alignItems: 'center',
    top: -417,
    borderRadius: 50,
  },
  button2: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: '45%',
    alignItems: 'center',
    top: -417,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
  },
});