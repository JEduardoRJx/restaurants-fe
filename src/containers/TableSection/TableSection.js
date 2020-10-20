import React from 'react';
import { TableItem } from '../../components/TableItem/TableItem';

export const TableSection = ({ filteredRestaurants }) => {
  
  const renderRestaurants = (filteredRestaurants) => {
    if (filteredRestaurants.length) {
      return filteredRestaurants.map(rest => <TableItem key={rest.id} rest={rest} />);
    } else {
      return <p>No Restaurants Found</p>;
    }
  }

  return (
    <section className="section has-background-primary">
      <h1 className="title has-text-white">Restaurants:</h1>
      {renderRestaurants(filteredRestaurants)}
    </section>
  );
}