import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Button } from 'react-native'
import React, { useState, useCallback, memo } from 'react'

const IncrementDecrement = memo(() => {
  const [currentValue, setCurrentValue] = useState(0);

  const increment = useCallback(() => {
    setCurrentValue(current => current + 1);
  }, []);

  const decrement = useCallback(() => {
    setCurrentValue(current => current - 1);
  }, []);
  return (
    <View style={style.activity}>
      <Button title='-' onPress={decrement} />
      <Text style={[style.button, style.space]}>{String(currentValue)}</Text>
      <Button title='+' onPress={increment} />
    </View>
  );
});


const App = memo(() => {
  return (
    <View style={style.background}>
      <Image style={style.image} source={{ uri: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg' }} />
      <Text style={style.title}>React Native</Text>
      <Text style={style.span}>Android + iOS + Web</Text>
      <IncrementDecrement />
      <View style={[style.cli, style.space]}>
        <Text style={style.terminalText}>
          npm run start
        </Text>
      </View>
      <Button onPress={() => Linking.openURL('https://reactnative.dev/docs/getting-started')} title='Read Docs' />
    </View>
  )
});
export default App;

const style = StyleSheet.create({
  cli: {
    backgroundColor: '#404040',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  terminalText: {
    color: '#FFFFFF'
  },
  background: {
    flex: 1,
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  span: {
    color: '#FFFFFF',
  },
  image: {
    width: 300,
    height: 268,
    margin: 50
  },
  button: {
    color: '#FFFFFF'
  },
  buttonParent: {
    backgroundColor: '#06bcee',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  space: {
    margin: 20,

  },
  activity: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  }
});
