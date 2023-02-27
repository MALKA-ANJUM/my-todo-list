import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const TodoItem = ({item, pressHandler}) => {
   
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>
            {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem;
const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        
    }
})
