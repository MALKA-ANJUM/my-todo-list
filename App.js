import React ,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('sheena');
  
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
