import React, { useState , useEffect} from 'react';
import './App.scss';
import { getRestaurants } from './apiCalls';
import { TableSection }  from './TableSection';
import { restaurants } from './restaurants';
import { Search } from './Search';
import { Filters } from './Filters';



export const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('');
  const [state, setState] = useState('')
  const [genre, setGenre] = useState('')

  useEffect( () => {
  //   getRestaurants()
  //     .then(data => setAllRestaurants(data))
    setAllRestaurants(restaurants)

  }, []);

  useEffect(() => {
    const restaurants = allRestaurants.filter(rest => rest.genre.includes(genre) &&
      (rest.state === state || state === ''))
      console.log('rest', restaurants)
      setFilteredRestaurants(restaurants);
  }, [state, genre]);

   const handleSearch = (e) => {
    if (e.key === 'Enter' || e.target.type === 'submit') {
      searchRestaurants(searchText)
    }
  }


    return (
      <main className="container is-widescreen">
        <Search setSearchText={setSearchText} handleSearch={handleSearch} />
        <Filters allRestaurants={allRestaurants} setState={setState} setGenre={setGenre}/>
        <TableSection restaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/>
      </main>
    )
}

export default App;
