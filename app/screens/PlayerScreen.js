import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Screen from '../components/Screen';

export default function PlayerScreen({navigation}) {
  return (
    <Screen>
      <Button title="Back" onPress={() => navigation.goBack(null)} />
      <Text>Player</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
