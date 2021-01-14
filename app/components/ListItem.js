import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import UI from '../constants/UI';
export default function ListItem({item, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.contianer}>
        <View>
          <Text style={styles.listItem}>{item}</Text>
        </View>
        <View>
          <Icon color={UI.GREY} size={20} name="plus" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  listItem: {
    fontSize: UI.FONT_SIZE_MEDIUM,
  },
});
