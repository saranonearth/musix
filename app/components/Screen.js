import React from 'react';
import {
  Text,
  StatusBar,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Screen() {
  console.log('cure height', StatusBar);
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hey </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
