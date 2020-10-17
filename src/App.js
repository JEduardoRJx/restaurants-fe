import React, { useState , useEffect} from 'react';
import './App.scss';
import { getRestaurants } from './apiCalls';


export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect( () => {
    getRestaurants()
      .then(data => setAllRestaurants(data))
  }, []);

    return (
      <main>
        hello
      </main>
    )
}

export default App;
