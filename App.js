import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BarcodeScannerScreen from './screens/BarcodeScannerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;