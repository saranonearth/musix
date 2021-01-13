import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {getPodcasts} from './app/store/Actions';
import DiscoverScreen from './app/screens/DiscoverScreen';
import PlaylistScreen from './app/screens/PlaylistScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import PlayerScreen from './app/screens/PlayerScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Handling nested navigation. Is thi right line 18 to 52
const PlaylistStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Playlist" component={PlaylistScreen} />
    <Stack.Screen name="Player" component={PlayerScreen} />
  </Stack.Navigator>
);

const DiscoverStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Discover" component={DiscoverScreen} />
    <Stack.Screen name="Player" component={PlayerScreen} />
  </Stack.Navigator>
);

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Discover">
        <Tab.Screen name="Playlist" component={PlaylistStackNavigator} />
        <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
