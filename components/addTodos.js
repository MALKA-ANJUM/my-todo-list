import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodos = ({ submitHandler }) => {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
            style={styles.input} 
            placeholder='new todo...'
            onChangeHandler={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='crimson' />
        </View>
        
    )
}

export default AddTodos;
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
