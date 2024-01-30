import * as React from 'react';
import { useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import LikeScreen from './src/screens/LikeScreen';
import SearchScreenProfil from './src/screens/SearchScreenProfil';
import Header from './src/component/Header'; 
import DetailCharacters from './src/component/detailcharacters';
import { LikedCharactersContext } from './src/component/LikedCharactersContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailCharacters} />
    </Stack.Navigator>
  )
}

function App() {
  const [likedCharacters, setLikedCharacters] = useState([]);

  return (
    <LikedCharactersContext.Provider value={{ likedCharacters, setLikedCharacters }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            header: () => (
              <Header />
            ),
          }}
        >
          {/* Vos autres composants vont ici */}
          <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="home" color={focused ? 'blue' : color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="magnify" color={focused ? 'blue' : color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Like" 
            component={LikeScreen} 
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="heart" color={focused ? 'blue' : color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Profil" 
            component={SearchScreenProfil} 
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="account" color={focused ? 'blue' : color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </LikedCharactersContext.Provider>
  );
}

export default App;