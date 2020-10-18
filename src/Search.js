import React, { useState } from 'react';

export const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = e => {
    setSearchText(e.target.value)
  }

  // handleSearchClick
  // Here you compare the search item with all the restaurants
  // then you send the filtered restuarnts back up into app
  // You set them to state there

  const handleSearchClick = (e) => {
    if (e.key === 'Enter' || e.target.type === 'submit') {
      searchRestaurants(searchText)
    }
  }

  const searchRestaurants = (text) => {
    const lowerCaseText = text.toLowerCase();
    const filteredRestaurants = restaurants.filter(rest => {
      const lowerCaseName = rest.name.toLowerCase();
      return lowerCaseName.includes(lowerCaseText)
    })
    // return filteredRestaurants
    // Here is where you iterate to finde the restaruants that match the name
    // then send that array back to app
    // then you set it to state
    setFilteredRestaurants(filteredRestaurants);
  }

  return (
    <section className="section has-background-link is-flex">
      <input className="input" type="text" placeholder="Search"
        onChange={e => handleSearchText(e)} 
        onKeyPress={(e) => handleSearchClick(e)} />
      <button className="button is-danger"
        onClick={(e) => handleSearchClick(e)}>Search</button>
      <p>{searchText}</p>
    </section>
  )
}