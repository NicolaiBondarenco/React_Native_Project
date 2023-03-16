import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import backArrow from '../../assets/images/backArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';

export const Arrows = ({onPressArrow}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPressArrow('back')}
        style={styles.wrapper}
      >
        <Image style={styles.img} source={backArrow}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressArrow('next')}
        style={styles.wrapper}
      >
        <Image style={styles.img} source={nextArrow}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  wrapper: {
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
  },
});
