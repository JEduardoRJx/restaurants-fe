import React, { useState , useEffect} from 'react';
import './App.scss';
import { getRestaurants } from './apiCalls';
import { TableSection }  from './TableSection';
import { restaurants } from './restaurants';
import { Search } from './Search';



export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect( () => {
  //   getRestaurants()
  //     .then(data => setAllRestaurants(data))
    setAllRestaurants(restaurants)

  }, []);


    return (
      <main className="container is-widescreen">
        {console.log(filteredRestaurants)}
        <Search restaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
        <TableSection restaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/>
      </main>
    )
}

export default App;
