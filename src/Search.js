import React, { useState } from 'react';

export const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = e => {
    setSearchText(e.target.value)
  }

  // handleSearchClick
  // Here you compare the search item with all the restaurants
  // then you send the filtered restuarnts back up into app
  // You set them to state there

  return (
    <section className="section has-background-link is-flex">
      <input className="input" type="text" placeholder="Search"
        onChange={e => handleSearchText(e)} />
      <button className="button is-danger">Search</button>
      <p>{searchText}</p>
    </section>
  )
}