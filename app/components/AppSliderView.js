import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import ViewSlider from 'react-native-view-slider';
import UI from '../constants/UI';

const {width, height} = Dimensions.get('window');

export default function AppSliderView() {
  const items = [
    'boxBlue',
    'boxPurple',
    'boxYellow',
    'boxRed',
    'boxGreen',
    'boxDarkBlue',
  ];
  return (
    <ViewSlider
      renderSlides={
        <>
          <View style={styles.viewBox}>
            {items.map((e) => (
              <View key={Math.random()} style={styles[e]}></View>
            ))}
          </View>
          <View style={styles.viewBox}>
            {items.map((e) => (
              <View key={Math.random()} style={styles[e]}></View>
            ))}
          </View>
        </>
      }
      style={styles.slider}
      height={250}
      slideCount={2}
      dots={true}
      dotActiveColor={UI.BLUE}
      dotInactiveColor={UI.WHITE_GREY}
      dotsContainerStyle={styles.dotContainer}
    />
  );
}

const styles = StyleSheet.create({
  viewBox: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 5,
  },
  boxBlue: {
    backgroundColor: UI.BLUE,
    width: 94,
    height: 94,
    borderRadius: 10,
    margin: 5,
  },
  boxPurple: {
    backgroundColor: UI.PURPLE,
    width: 94,
    height: 94,
    borderRadius: 10,
    margin: 5,
  },
  boxGreen: {
    backgroundColor: UI.GREEN,
    width: 94,
    height: 94,
    borderRadius: 10,
    margin: 5,
  },
  boxYellow: {
    backgroundColor: UI.YELLOW,

    width: 94,
    height: 94,
    borderRadius: 10,
    margin: 5,
  },
  boxRed: {
    backgroundColor: UI.TOMATO,
    width: 94,
    height: 94,
    borderRadius: 10,
    margin: 5,
  },
  boxDarkBlue: {
    backgroundColor: UI.DARK_BLUE,
    width: 94,
    height: 94,
    borderRadius: 10,
    margin: 5,
  },
});
