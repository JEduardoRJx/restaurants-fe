import React, { useState } from 'react';

export const Search = ({ setSearchText }) => {
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSearch = (e) => {
    console.log('text', text)
    if (e.key === 'Enter' || e.target.type === 'submit') {
      setSearchText(text)
    }
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
        onChange={e => handleText (e)} 
        onKeyPress={(e) => handleSearch(e)} 
        />
      <button className="button is-danger"
        onClick={(e) => handleSearch(e)}
        >Search</button>
    </section>
  )
}