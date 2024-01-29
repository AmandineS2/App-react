import * as React from 'react';
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
  {/* <Stack.Screen name="Detail" component={Detail} /> */}
  <Stack.Screen name="Detail" component={DetailCharacters} />
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
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Like" component={LikeScreen} />
        <Tab.Screen name="Profil" component={SearchScreenProfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App