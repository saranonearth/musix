import React, {useEffect} from 'react';
import {Text, Button, StyleSheet, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {FlatList} from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import {getPodcasts} from '../store/Actions';
import UI from '../constants/UI';
import BackButton from '../components/BackButton';

export default function PlayerScreen({navigation, route}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  Icon.loadFont();

  return (
    <View style={styles.contianer}>
      <View style={styles.player}>
        <Screen>
          <View style={styles.playerContainer}>
            <BackButton color={'white'} navigation={navigation} />
          </View>
          <View style={styles.center}>
            <View style={styles.image}></View>

            <View style={styles.controllers}>
              <View style={[styles.flexOne, styles.circle]}>
                <Text>
                  <Icon
                    size={30}
                    name="dots-three-horizontal"
                    color={'white'}
                  />
                </Text>
              </View>
              <View style={styles.flexTwo}>
                <Text style={styles.text}>{route.params.name}</Text>
              </View>
              <View style={[styles.flexOne, styles.circle]}>
                <Text>
                  <Icon size={30} name="controller-play" color={'white'} />
                </Text>
              </View>
            </View>
          </View>
        </Screen>
      </View>
      <View style={styles.list}>
        <View style={styles.bar}></View>
        <View style={styles.listHolder}>
          {state.globalStore.podcasts ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{flexGrow: 1}}
              data={state.globalStore.podcasts}
              keyExtractor={(m) => m.toString()}
              renderItem={({item}) => (
                <ListItem
                  onPress={() => navigation.navigate('Player', {name: item})}
                  item={item}
                />
              )}
            />
          ) : (
            <Text>Loading</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    height: '100%',
    flex: 1,
  },
  flexOne: {
    flex: 0.5,
  },
  flexTwo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: UI.FONT_WEIGHT_HEAVY,
    fontSize: UI.FONT_SIZE_MEDIUM,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  center: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#67b9fd',
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  playerContainer: {
    padding: 30,
  },
  player: {
    flex: 3,
    backgroundColor: UI.BLUE,
  },
  bar: {
    backgroundColor: '#fff',
    height: 10,
    width: '100%',
    marginTop: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#333',
  },
  controllers: {
    flexDirection: 'row',
    flexGrow: 1,

    width: '86%',
    marginTop: 25,
  },
  list: {
    flex: 2.5,
    backgroundColor: '#fff',
  },
  listHolder: {
    padding: 30,
  },
});
