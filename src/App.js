import React, { useState , useEffect} from 'react';
import './App.scss';
import { getRestaurants } from './apiCalls';
import { TableSection }  from './TableSection'


export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect( () => {
    getRestaurants()
      .then(data => setAllRestaurants(data))
  }, []);

    return (
      <main className="container is-widescreen">
        {console.log(allRestaurants)}
        Hello
        <TableSection />
      </main>
    )
}

export default App;
