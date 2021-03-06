/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Loading } from './components/common/';
import Auth from './screens/Auth';
import LoggedIn from './screens/LoggedIn';
import {Platform, StyleSheet, Text, View} from 'react-native';
import deviceStorage from './services/deviceStorage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    }
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this)
    this.loadJWT();
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render() {
    if(this.state.loading) {
      return (
        <Loading size={'large'} />
      );
    } else if(!this.state.jwt) {
      return (
        <Auth newJWT={this.newJWT} />
      );
    } else if(this.state.jwt) {
      return (
        <LoggedIn jwt={this.state.jwt} deleteJWT={this.deleteJWT} />
      );
    }
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
