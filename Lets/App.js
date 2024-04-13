import React,{useEffect } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import LoginPage from './screens/LoginPage';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>
        {/* <Stack.Screen name="TestPage" component={TestPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}