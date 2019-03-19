/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import testReducer from './TestReducer';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './AppContainer';

const store = createStore(testReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleTests: [
        'some',
        'strings',
        'go',
        'here',
      ],
      currentTests: [],
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          screenProps={ {
            currentTests: this.state.currentTests,
            possibleTests: this.state.possibleTests,
            addTest: this.addTest
          }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
