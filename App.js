import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DiscoverScreen from './app/screens/DiscoverScreen';
import PlaylistScreen from './app/screens/PlaylistScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import PlayerScreen from './app/screens/PlayerScreen';
import UI from './app/constants/UI';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
Icon.loadFont();
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
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: UI.DARK_GREY,

          labelStyle: {
            fontSize: 10,
            marginBottom: -5,
            fontWeight: UI.FONT_WEIGHT_MEDIUM,
          },
        }}
        initialRouteName="Discover">
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon size={size} color={color} name="list" />
            ),
          }}
          name="Playlist"
          component={PlaylistStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon size={size} color={color} name="compass-outline" />
            ),
          }}
          name="Discover"
          component={DiscoverStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon size={size} color={color} name="person-outline" />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
