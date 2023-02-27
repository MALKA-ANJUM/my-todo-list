import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        My Todos
      </Text>
    </View>
  )
}

export default Header;
const styles = StyleSheet.create({
    header: {
        height: 140,
        backgroundColor: 'crimson',
        paddingTop: 110,
        width: '100%',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    }
})

