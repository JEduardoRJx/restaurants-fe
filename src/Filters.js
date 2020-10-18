import React, { useState } from 'react';

export const Filters = ({ allRestaurants }) => {

  const renderStates = (allRestaurants) => {
    const allStates = allRestaurants.map(rest => rest.state);
    const uniqueStates = [...new Set(allStates)];
    return uniqueStates.map(state => <option key={state} value={state}>{state}</option> )
  }

  return (
    <section className="section has-background-success">
      <p>Filters</p>

      <div className="container is-flex">
        <div className="container">
          <p>State</p>
          <div className="select">
            <select>
              <option value="All" defaultValue>All</option>
              {renderStates(allRestaurants)}
            </select>
          </div>
        </div>

        <div className="container">
          <p>Genre</p>
          <div className="select">
            <select>
              <option>All</option>
              {renderGenres(allRestaurants)}
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}