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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/img/profil.png')
                : require('../assets/img/profil.png');
            } else if (route.name === 'Search') {
              iconName = focused
                ? require('../assets/img/profil.png')
                : require('../assets/img/profil.png');
            } else if (route.name === 'Profil') {
              iconName = focused
                ? require('../assets/img/profil.png')
                : require('../assets/img/profil.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{ width: 20, height: 20 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
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