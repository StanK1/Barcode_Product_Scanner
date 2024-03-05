import * as React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Barcode Scanner App!</Text>
      <Button 
        title="Scan Barcode"
        onPress={() => navigation.navigate('BarcodeScanner')} 
      />
    </View>
  );
};

export default HomeScreen;
