import React, {useEffect} from 'react';
import {Text, Button, StyleSheet, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import {getPodcasts} from '../store/Actions';
import UI from '../constants/UI';

Icon.loadFont();

export default function DiscoverScreen({navigation}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  console.log(state);
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
          <Text style={[styles.title, styles.blueText]}>Podcasts</Text>

          <TextInput style={styles.searchBar} placeholder="Search..." />
        </View>

        <View style={styles.list}>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 30,
    marginTop: 20,
  },
  header: {
    flex: 1,
  },
  list: {
    flex: 3.5,
    marginBottom: 50,
  },

  title: {
    fontSize: UI.FONT_SIZE_LARGE,
    fontWeight: UI.FONT_WEIGHT_HEAVY,
  },
  blueText: {
    color: UI.BLUE,
  },
  searchBar: {
    backgroundColor: UI.LIGHT_GREY,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});
