import React from 'react';
import { TableItem } from './TableItem';

export const TableSection = ({ filteredRestaurants }) => {
  
  const renderRestaurants = (filteredRestaurants) => {
    if (filteredRestaurants.length) {
      return filteredRestaurants.map(rest => <TableItem key={rest.id} rest={rest} />)
    } else {
      return <p>No Restaurants Found</p>
    }
  }

  return (
    <section className="section has-background-primary">
      <h1 className="title has-text-white">Section</h1>
      {renderRestaurants(filteredRestaurants)}
      
      {/* <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
    </section>
  )
}