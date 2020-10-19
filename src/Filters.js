import React from 'react';

export const Filters = ({ allRestaurants, setState, setGenre}) => {

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

  const selectState = (e) => {
    const state = e.target.value;
    if (state === 'All') {
      setState('');
    } else {
      setState(state);
    }
  }

  const selectGenre = (e) => {
    const genre = e.target.value;
    if (genre === 'All') {
      setGenre('');
    } else {
      setGenre(genre);
    }
  }
  return (
    <section className="section has-background-success">
      <p>Filters</p>
      <div className="container is-flex">
        <div className="container">
          <p>State</p>
          <div className="select">
            <select onChange={(e) => selectState(e)}>
              <option value="All" defaultValue>All</option>
              {renderStates(allRestaurants)}
            </select>
          </div>
        </div>

        <div className="container">
          <p>Genre</p>
          <div className="select">
            <select onChange={(e) => selectGenre(e)}>
              <option value="All" defaultValue>All</option>
              {renderGenres(allRestaurants)}
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}