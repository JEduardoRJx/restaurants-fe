import React, { Component, useState} from 'react';
import './App.scss';
import { getRestaurants } from './apiCalls';

export class App extends Component {

  async componentDidMount() {
    try {
      const restaurants = await getRestaurants();
      console.log('ayyyyo', restaurants)
    } catch {
      console.log("can't fetch restaurants")
    }
  }

  render() {
    return (
      <main>
        Hello
      </main>
    )
  }
}

export default App;
