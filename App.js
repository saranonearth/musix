import React, {useEffect} from 'react';
import Screen from './app/components/Screen';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text, View} from 'react-native';
import {getPodcasts} from './app/store/Actions';

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  return (
    <Screen>
      {state.gloabalState.podcasts ? (
        <Text>{state.gloabalState.podcasts[0]}</Text>
      ) : (
        <Text>Ayioo</Text>
      )}
    </Screen>
  );
};

export default App;
