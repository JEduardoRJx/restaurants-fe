import React from 'react';

export const Filters = () => {

  return (
    <section className="section has-background-success">
      <p>Filters</p>

      <div className="container is-flex">
        <div className="container">
          <p>State</p>
          <div className="select">
            <select>
              <option>All</option>
            </select>
          </div>
        </div>

        <div className="container">
          <p>Genre</p>
          <div className="select">
            <select>
              <option>All</option>
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}