import React, { Component } from 'react';
import {TweenMax} from 'gsap';

export default class MyAnimation extends Component {
  componentDidMount() {
    //TweenMax.set(this.myObject, { transformOrigin: '50% 50%' });
    console.log('done');
  }
  render() {
    return (
      <div>
        <div id="myObject"></div>
      </div>
    )
  }
}
