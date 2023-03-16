import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Navigate} from './Navigate';
import {store} from './bll/store';
import {Provider} from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
