import React from 'react';
import { TableItem } from './TableItem';
// import { restaurants } from './restaurants';

export const TableSection = ({ restaurants, filteredRestaurants }) => {
  
  const renderRestaurants = (restaurants, filteredRestaurants) => {
    if (filteredRestaurants.length) {
      return filteredRestaurants.map(rest => <TableItem key={rest.id} rest={rest} />)
    } else {
      return restaurants.map(rest => <TableItem key={rest.id} rest={rest} />)
    }

  }
  
  

  return (
    <section className="section has-background-primary">
      <h1 className="title">Section</h1>
      {renderRestaurants(restaurants, filteredRestaurants)}
      
      {/* <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
    </section>
  )
}