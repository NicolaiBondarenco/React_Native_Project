import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {Home} from './ui/screens/Home';
import {Read} from './ui/screens/Read';
import openBook from './assets/images/openBook.png';
import closeBook from './assets/images/closeBook.png';

const Tab = createBottomTabNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {position: 'absolute', top: 0},
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <Image style={styles.img} source={openBook} />
            ),
          }}
        />
        <Tab.Screen
          name="Read"
          component={Read}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <Image style={styles.img} source={closeBook} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    marginTop: 15,
  },
});
