import { TouchableHighlight, Text } from 'react-native';
import React from 'react';

export default function NumberButton({ label, handlePress }) {
  return (
    <TouchableHighlight
      onPress={() => handlePress(label)}
      style={{
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 12,
        borderRadius: 4,
        width: '30%',

        // flexShrink: 2,
      }}
    >
      <Text
        style={{
          fontSize: 38,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {label}
      </Text>
    </TouchableHighlight>
  );
}
