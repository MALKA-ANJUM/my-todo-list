import React ,{ useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AddTodos from './components/addTodos';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'}
  ]);
  
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  } 

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* form */}
        <AddTodos submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
          data={todos} 
          renderItem={({item}) => (
            // <Text>{item.text}</Text>
            <TodoItem item={item} 
            pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
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
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
