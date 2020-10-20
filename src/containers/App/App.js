import React, { useState , useEffect} from 'react';
import './App.scss';
import { getRestaurants } from '../../apiCalls';
import { TableSection }  from '../TableSection';
import { restaurants } from '../restaurants';
import { Search } from '../Search/Search';
import { Filters } from '../Filters';



export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('');
  const [state, setState] = useState('');
  const [genre, setGenre] = useState('');
  const [isLoading, setLoading] = useState(true)

  useEffect( () => {
  //   getRestaurants()
  //     .then(data => {
  //   setAllRestaurants(data)
  //   setFilteredRestaurants(data)
  // })
  
    setAllRestaurants(restaurants)
    setFilteredRestaurants(restaurants)
    setLoading(false)
  }, []);

  useEffect(() => {
      const restaurants = searchRestaurants();
      setFilteredRestaurants(restaurants);
  }, [state, genre, searchText, isLoading]);

  const searchRestaurants = () => {
    let restaurants = allRestaurants.filter(rest => {
      const lowerCaseSearchText = searchText.toLowerCase();
      const lowerCaseName = rest.name.toLowerCase();
      const lowerCaseCity = rest.city.toLowerCase();
      const lowerCaseGenre = rest.genre.toLowerCase();

      return rest.genre.includes(genre) && (rest.state === state || state === '') &&
      (lowerCaseName.includes(lowerCaseSearchText) ||
          lowerCaseCity.includes(lowerCaseSearchText) ||
          lowerCaseGenre.includes(lowerCaseSearchText))
    })

    return restaurants
  }

    return (
      <main className="container is-widescreen">
        <Search setSearchText={setSearchText} />
        <Filters allRestaurants={allRestaurants} setState={setState} setGenre={setGenre}/>
        <TableSection filteredRestaurants={filteredRestaurants} />
      </main>
    )
}

export default App;
