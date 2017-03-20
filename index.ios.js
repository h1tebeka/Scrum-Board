import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
 
import Register from './src/pages/Register';
 
export default class ScrumBoard extends Component {
 
  render() {
    return (
      <Register />
    );
  }
 
}
 
AppRegistry.registerComponent('ScrumBoard', () => ScrumBoard);
