import React from 'react';
import { TableItem } from './TableItem';
import { restaurants } from './restaurants';

export const TableSection = () => {
  
  const renderRestaurants = (restaurants) => {
      return restaurants.map(rest => <TableItem  rest={rest} />)
  }
  
  

  return (
    <section className="section has-background-primary">
      <h1 className="title">Section</h1>
      {renderRestaurants(restaurants)}
      
      {/* <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
    </section>
  )
}