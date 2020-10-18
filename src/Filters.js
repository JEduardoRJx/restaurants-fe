import React, { useState } from 'react';

export const Filters = ({ allRestaurants }) => {
  const [state, setState] = useState('');

  const renderStates = (allRestaurants) => {
    const allStates = allRestaurants.map(rest => rest.state);
    const uniqueStates = [...new Set(allStates)];
    return uniqueStates.map(state => <option key={state} value={state}>{state}</option> )
  }

  const renderGenres = (allRestaurants) => {
    const allGenres = allRestaurants.map(rest => rest.genre.split(',')).flat();
    const uniqueGenres = [...new Set(allGenres)];
    return uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option> )
  }

  const filterByState = (e) => {
    console.log(e.target.value);
    const state = e.target.value;
    const filteredRestaurantsByState = allRestaurants.filter(rest => rest.state === state)
    console.log(filteredRestaurantsByState);

  }

  const filterByGenre = (e) => {
    console.log(e.target.value);
    const genre = e.target.value;
    const filteredRestaurantsByGenre = allRestaurants.filter(rest => rest.genre.includes(genre))
    console.log(filteredRestaurantsByState);
  }

  const combineFilters = () => {

  }

  return (
    <section className="section has-background-success">
      <p>Filters</p>

      <div className="container is-flex">
        <div className="container">
          <p>State</p>
          <div className="select">
            <select onChange={(e) => filterByState(e)}>
              <option value="All" defaultValue>All</option>
              {renderStates(allRestaurants)}
            </select>
          </div>
        </div>

        <div className="container">
          <p>Genre</p>
          <div className="select">
            <select onChange={(e) => filterByGenre(e)}>
              <option>All</option>
              {renderGenres(allRestaurants)}
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}