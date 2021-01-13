import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import Screen from '../components/Screen';

export default function DiscoverScreen({navigation}) {
  return (
    <Screen>
      <Text>Discover</Text>
      <Button title="Player" onPress={() => navigation.navigate('Player')} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
