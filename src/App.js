import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
