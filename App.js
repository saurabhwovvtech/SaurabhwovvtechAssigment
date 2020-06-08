import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Components/Home';
import Details from './Components/Details';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
});

export default createAppContainer(AppNavigator);
