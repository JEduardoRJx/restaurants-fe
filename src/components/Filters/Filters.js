import React from 'react';

export const Filters = ({ allRestaurants, setState, setGenre}) => {

  const renderStates = (allRestaurants) => {
    const allStates = allRestaurants.map(rest => rest.state);
    let uniqueStates = [...new Set(allStates)];
    uniqueStates = uniqueStates.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return uniqueStates.map(state => <option key={state} value={state}>{state}</option> );
  }

  const renderGenres = (allRestaurants) => {
    const allGenres = allRestaurants.map(rest => rest.genre.split(',')).flat();
    let uniqueGenres = [...new Set(allGenres)];
    uniqueGenres = uniqueGenres.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option> );
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
      <h1 className="title">Filters</h1>
      <div className="container is-flex">
        <div className="container">
          <p className="is-size-5-touch is-size-4">State</p>
          <div className="select">
            <select onChange={(e) => selectState(e)}>
              <option value="All" defaultValue>All</option>
              {renderStates(allRestaurants)}
            </select>
          </div>
        </div>
        <div className="container">
          <p className="is-size-5-touch is-size-4">Genre</p>
          <div className="select">
            <select onChange={(e) => selectGenre(e)}>
              <option value="All" defaultValue>All</option>
              {renderGenres(allRestaurants)}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}