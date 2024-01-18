import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SearchScreenProfil from './src/screens/SearchScreenProfil';
import Header from './src/component/Header'; 


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const detailcharacters = () => {
return (
  <Stack.Navigator
  initialRouteName='Home'
  screenOptions={{
    headerShown: false
  }}
>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Detail" component={detailcharacters} />
</Stack.Navigator>
)
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => (
            <Header />
          ),
        }}
      >
        <Tab.Screen name="Home" component={detailcharacters} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profil" component={SearchScreenProfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;