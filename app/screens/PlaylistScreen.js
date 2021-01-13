import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Screen from '../components/Screen';

export default function PlaylistScreen({navigation}) {
  return (
    <Screen>
      <Text>Playlist</Text>
      <Button title="Player" onPress={() => navigation.navigate('Player')} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
