import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Image} from 'react-native';

import Screen from '../components/Screen';
import BackButton from '../components/BackButton';
import UI from '../constants/UI';
import Assets from '../constants/assets';
import {FlatList, TouchableHighlight} from 'react-native-gesture-handler';
import AppSliderView from '../components/AppSliderView';
import NotificationListItem from '../components/NotificationListItem';

const Notifications = [
  {id: 'newEpisode', name: 'New episodes'},
  {id: 'friendRequest', name: 'Friend requests'},
  {id: 'newAppFeatures', name: 'New app features'},
];

export default function ProfileScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState({
    newEpisode: false,
    friendRequest: true,
    newAppFeatures: false,
  });

  const toggleSwitch = (item) =>
    setIsEnabled({
      ...isEnabled,
      [item.id]: !isEnabled[item.id],
    });

  return (
    <Screen>
      <View style={styles.contianer}>
        <BackButton navigation={navigation} />

        <View style={styles.userView}>
          <Image style={styles.avatar} source={Assets.Avatar} />
          <View style={[styles.center, styles.userContent]}>
            <Text style={[styles.bold]}>Benjamin</Text>
            <Text style={styles.userId}>@benjamin</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={styles.edit}>
              <Text style={styles.white}>Edit</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.mostListened}>
          <Text style={styles.bold}>Most Listened</Text>
          <AppSliderView />
        </View>

        <View style={styles.notifications}>
          <Text style={styles.bold}>Notifications</Text>
          <FlatList
            style={styles.notificationList}
            data={Notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <NotificationListItem
                item={item}
                toggleSwitch={toggleSwitch}
                isEnabled={isEnabled[item.id]}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  contianer: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  userView: {
    width: '100%',
    marginTop: 30,
    backgroundColor: UI.LIGHT_GREY,
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  notificationList: {
    marginTop: 12,
  },
  mostListened: {
    backgroundColor: UI.LIGHT_GREY,
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
    paddingBottom: 0,
  },
  center: {},
  userContent: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 10,
    alignContent: 'center',
  },
  bold: {
    fontSize: 16,
    fontWeight: UI.FONT_WEIGHT_HEAVY,
  },
  userId: {
    color: UI.GREY,
    fontSize: UI.FONT_SIZE_SMALL,
    marginTop: 3,
  },
  edit: {
    backgroundColor: UI.BLUE,
    color: '#fff',
    padding: 5,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
  white: {
    color: '#fff',
  },
  notifications: {
    backgroundColor: UI.LIGHT_GREY,
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
});
