import React from 'react';
import {View, useWindowDimensions} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          position: 'absolute',
          top: useWindowDimensions().height - 20,
        }}></View>
    </View>
  );
}
