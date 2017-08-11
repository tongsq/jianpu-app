'use strict';

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {NativeModules} from 'react-native';
import AppNavigator from './view/app';
import store, {reduxPersistStore} from './store';
import {VERSION} from './config';
const SplashScreen = NativeModules.SplashScreen;
export default class App extends Component{
    componentDidMount(){
      console.log('app is mounted');
      SplashScreen.hide();
    }
    render(){
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      )
    }
};

reduxPersistStore(store, state => {
    console.log('State has been rehydrated to: ', store.getState()) 
});