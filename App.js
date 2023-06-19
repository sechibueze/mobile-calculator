import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  StatusBar as AppBar,
  TouchableHighlight,
} from 'react-native';
import { useState } from 'react';
import NumberButton from './components/NumberButton';
export default function App() {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 12,
          width: '98%',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'right',
            padding: 15,
          }}
        >
          {input}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '98%',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <NumberButton label={1} handlePress={(value) => setInput(value)} />
        <NumberButton label={2} handlePress={(value) => setInput(value)} />
        <NumberButton label={3} handlePress={(value) => setInput(value)} />
        <NumberButton label={4} handlePress={(value) => setInput(value)} />
        <NumberButton label={5} handlePress={(value) => setInput(value)} />
        <NumberButton label={6} handlePress={(value) => setInput(value)} />
        <NumberButton label={7} handlePress={(value) => setInput(value)} />
        <NumberButton label={8} handlePress={(value) => setInput(value)} />
        <NumberButton label={9} handlePress={(value) => setInput(value)} />
        <NumberButton label={'X'} handlePress={(value) => setInput(value)} />
        <NumberButton label={0} handlePress={(value) => setInput(value)} />
        <NumberButton label={'='} handlePress={(value) => setInput(value)} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: AppBar.currentHeight,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
