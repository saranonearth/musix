import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UI from '../constants/UI';

Icon.loadFont();

export default function BackButton({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.backButton} onPress={() => navigation.goBack(null)}>
        <Icon size={15} name="left" />
        &nbsp;Back
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {},
  backButton: {
    fontSize: UI.FONT_SIZE_MEDIUM,
    fontWeight: UI.FONT_WEIGHT_MEDIUM,
    color: UI.GREY,
  },
});
