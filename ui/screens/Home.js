import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeLevel, fetchLevels} from '../../bll/levelSlice';
import {Level} from '../components/Level';

export const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLevels());
  }, []);

  const onChangeLevel = lev => {
    dispatch(changeLevel(lev));
    navigation.navigate('Read');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Чтайка</Text>
        <View style={styles.wrapperLevel}>
          <View>
            <Level onPressLevel={() => onChangeLevel(1)} level={1} />
          </View>
          <View style={styles.wrapper}>
            <Level onPressLevel={() => onChangeLevel(2)} level={2} />
            <Level onPressLevel={() => onChangeLevel(3)} level={3} />
          </View>
          <View>
            <Level onPressLevel={() => onChangeLevel(4)} level={4} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
  },
  contentContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'pink',
    fontWeight: 'bold',
    padding: 30,
  },
  wrapperLevel: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
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
