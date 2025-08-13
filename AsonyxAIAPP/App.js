import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './app/screens/Login'
import BluetoothScreen from './app/screens/BluetoothScreen';
const Stack = createNativeStackNavigator();

 
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Bluetooth" component={BluetoothScreen}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}


 