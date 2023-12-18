import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";

function Header() {
  return (
    <View style={{ height: 427, width: 1500, top:-310, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
      <Text style={{ top: 110 }}>Mon En-tête</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ top: 54, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
      <Header />
      <Text style={{ top: -94 }}>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => console.log('Bouton 1 cliqué!')}>
          <Text style={styles.buttonText}>Personnages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => console.log('Bouton 2 cliqué!')}>
          <Text style={styles.buttonText}>Filtrer</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

function Footer() {
  return (
    <View style={{ height: 50, width: 1500, top: 140, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
      <Text style={{ top: 2 }}>Footer</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button1: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    width: '45%',
    alignItems: 'center',
    top: 50,
  },
  button2: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});