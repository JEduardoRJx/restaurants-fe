import React, { useState , useEffect} from 'react';
import './App.scss';
import { getRestaurants } from './apiCalls';
import { TableSection }  from './TableSection';
import { restaurants } from './restaurants';



export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect( () => {
  //   getRestaurants()
  //     .then(data => setAllRestaurants(data))
    setAllRestaurants(restaurants)

  }, []);

    return (
      <main className="container is-widescreen">
        {/* {console.log(allRestaurants)} */}
        <TableSection restaurants={allRestaurants} />
      </main>
    )
}

export default App;
