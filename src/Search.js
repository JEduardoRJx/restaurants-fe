import React, { useState } from 'react';

export const Search = ({ restaurants, setFilteredRestaurants, setSearchText }) => {

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
  }


  // const searchRestaurants = (text) => {
  //   const lowerCaseText = text.toLowerCase();
  //   const filteredRestaurants = restaurants.filter(rest => {
  //     const lowerCaseName = rest.name.toLowerCase();
  //     return lowerCaseName.includes(lowerCaseText)
  //   })
  //         setFilteredRestaurants(filteredRestaurants);
  // }

  return (
    <section className="section has-background-link is-flex">
      <input className="input" type="text" placeholder="Search"
        onChange={e => handleSearchText(e)} 
        onKeyPress={(e) => handleSearch(e)} 
        />
      <button className="button is-danger"
        onClick={(e) => handleSearch(e)}
        >Search</button>
      <p>{searchText}</p>
    </section>
  )
}