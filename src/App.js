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
        {console.log(allRestaurants.length)}
        <ul>
          {allRestaurants.map (rest => (<li key={rest.id}>{rest.name}</li>))}
        </ul>
      </main>
    )
}

export default App;
