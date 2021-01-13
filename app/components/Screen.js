import React from 'react';
import {
  Text,
  StatusBar,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Screen({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  contianer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
