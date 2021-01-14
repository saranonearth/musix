import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import UI from '../constants/UI';
export default function NotificationListItem({toggleSwitch, item, isEnabled}) {
  return (
    <View style={styles.contianer}>
      <Text>{item.name}</Text>
      <Switch
        trackColor={{false: UI.GREY, true: UI.BLUE}}
        thumbColor={'#fff'}
        ios_backgroundColor={UI.LIGHT_GREY}
        onValueChange={() => toggleSwitch(item)}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
});
