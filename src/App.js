import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
  componentWillMount() {    
    firebase.initializeApp({
      apiKey: 'AIzaSyDko7wM-OnCzYQ6tgp06Zi5nxEbPEhIgQU',
      authDomain: 'react-native-auth-64a63.firebaseapp.com',
      databaseURL: 'https://react-native-auth-64a63.firebaseio.com',
      projectId: 'react-native-auth-64a63',
      storageBucket: 'react-native-auth-64a63.appspot.com',
      messagingSenderId: '832784902294'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
