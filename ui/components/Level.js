import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import emptyStar from '../../assets/images/emptyStar.png';
import activeStar from '../../assets/images/activeStar.png';

export const Level = props => {
  const {level, onPressLevel} = props;
  const arrLevel = [1, 2, 3, 4];
  return (
    <Shadow>
      <TouchableOpacity style={styles.container} onPress={onPressLevel}>
        <Text>Уровень сложности</Text>
        <View style={styles.wrapper}>
          {arrLevel.map(item => (
            <Image
              key={item}
              style={styles.img}
              source={item < level || item === level ? activeStar : emptyStar}
            ></Image>
          ))}
        </View>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    width: 30,
    height: 30,
  },
});
