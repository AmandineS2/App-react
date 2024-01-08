import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from "axios";
import Logo from './src/component/Logo';


function Header() {
  return (
    <View style={styles.headerContainer}>
      <Logo/>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      setData(prevData => [...prevData, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
          </View>
        )}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
        numColumns={2} // Ajoutez cette ligne
      />
    </View>
  );
}


function SearchScreen() {
  return (
    <View style={{ backgroundColor: '#47557B' }}>
      <Header />
      
    </View>
  );
}

function SearchScreenProfil() {
  return (
    <View style={{backgroundColor: '#47557B' }}>
      <Header />
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Ajoutez des marges pour espacer les éléments
  },
  headerContainer: {
    backgroundColor: '#47557B', // Remplacez ceci par la couleur de votre choix
    // Ajoutez d'autres styles si nécessaire
  },
});