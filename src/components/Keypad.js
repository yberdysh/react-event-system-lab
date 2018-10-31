// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  render() {
    return (
      <div><input onKeyUp={() => console.log('Entering password...')} type="password"/></div>
    );
  }
}
