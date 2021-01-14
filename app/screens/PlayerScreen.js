import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

import Screen from '../components/Screen';

export default function PlayerScreen({navigation, route}) {
  console.log(route.params);
  return (
    <Screen>
      <Button title="Back" onPress={() => navigation.goBack(null)} />
      <Text>Player</Text>
      <Text>{route.params.name}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
