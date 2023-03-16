import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Arrows} from '../components/Arrows';
import {Frame} from '../components/Frame';
import {shuffle} from '../../Helpers';

const Sound = require('react-native-sound');
Sound.setCategory('Playback');

const win = new Sound('win.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

const loose = new Sound('loose.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

export const Read = ({navigation}) => {
  //Selector
  const {level, allItems} = useSelector(state => state.levels);

  //State

  const [currentObj, setCurrentObj] = useState({});
  const [guessWord, setGuessWord] = useState('');
  const [frameImg1, setFrameImg1] = useState({});
  const [frameImg2, setFrameImg2] = useState({});
  const [frameImg3, setFrameImg3] = useState({});
  const [frameImg4, setFrameImg4] = useState({});

  function searchRandomObj() {
    //choose random obj
    const chooseObjectsWithNeedLevel = level
      ? allItems.filter(item => item.level === level)
      : '';
    const pickUpFourObj = shuffle(chooseObjectsWithNeedLevel).slice(0, 4);
    const randIndex = Math.floor(Math.random() * pickUpFourObj.length);
    const currentObj = pickUpFourObj[randIndex];
    setCurrentObj(currentObj);
    setGuessWord(currentObj.word);
    //choose random obj end

    setFrameImg1(pickUpFourObj[0]);
    setFrameImg2(pickUpFourObj[1]);
    setFrameImg3(pickUpFourObj[2]);
    setFrameImg4(pickUpFourObj[3]);
  }

  useFocusEffect(
    useCallback(() => {
      searchRandomObj();
    }, [level]),
  );

  const onChangePage = val => {
    if (val === 'back') {
      return navigation.goBack();
    }
    navigation.jumpTo('Read');
    searchRandomObj();
  };

  const onPressFrame = value => {
    win.setVolume(0.5);
    loose.setVolume(0.5);
    if (currentObj.word === value) {
      win.play();
      return searchRandomObj();
    }
    return loose.play();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>{guessWord}</Text>
        <View style={styles.wrapperLevel}>
          <View style={styles.wrapper}>
            <Frame
              image={frameImg1.img}
              word={frameImg1.word}
              onPressFrame={onPressFrame}
            />
            <Frame
              image={frameImg2.img}
              word={frameImg2.word}
              onPressFrame={onPressFrame}
            />
          </View>
          <View style={styles.wrapper}>
            <Frame
              image={frameImg3.img}
              word={frameImg3.word}
              onPressFrame={onPressFrame}
            />
            <Frame
              image={frameImg4.img}
              word={frameImg4.word}
              onPressFrame={onPressFrame}
            />
          </View>
        </View>
        <View>
          <Arrows onPressArrow={onChangePage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0c4de',
  },
  contentContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    padding: 15,
  },
  wrapperLevel: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
    height: Dimensions.get('window').height * 0.55,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
});
