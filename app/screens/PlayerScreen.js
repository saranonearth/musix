import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

import Screen from '../components/Screen';
import UI from '../constants/UI';

export default function PlayerScreen({navigation, route}) {
  console.log(route.params);
  return (
    <View style={styles.contianer}>
      <View style={styles.player}>
        <Screen>
          <Text>Player</Text>
        </Screen>
      </View>
      <View style={styles.list}>
        <View style={styles.bar}></View>
        <Text>list</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    height: '100%',
    flex: 1,
    backgroundColor: UI.GREEN,
  },
  player: {
    flex: 3,
    backgroundColor: UI.BLUE,
  },
  bar: {
    backgroundColor: '#fff',
    height: 10,
    width: '100%',
    marginTop: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#333',
  },
  list: {
    flex: 2,
    backgroundColor: '#fff',
  },
});
