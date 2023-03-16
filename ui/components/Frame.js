import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

export const Frame = props => {
  const {result, image, word, onPressFrame} = props;
  return (
    <Shadow>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPressFrame(word)}
      >
        <Image style={styles.img} source={{uri: image}}></Image>
      </TouchableOpacity>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '70%',
    height: '70%',
  },
});
