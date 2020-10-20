import React, { useState } from 'react';

export const Search = ({ setSearchText }) => {
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.target.type === 'submit') {
      setSearchText(text);
    }
  }

  const handleClear = () => {
    setSearchText('');
    document.querySelector('.input').value = '';
  }

  return (
    <section className="section is-flex">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Search"
            onChange={e => handleText(e)} 
            onKeyPress={(e) => handleSearch(e)} />
        </div>
        <div className="control">
          <button className="button is-danger">
            <span className="icon is-small is-right"
              onClick={() => handleClear()}>
                <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="field is-grouped">
        <p className="control is-expanded"></p>
        <button className="button is-danger"
          onClick={(e) => handleSearch(e)}>Search</button>
      </div>
    </section>
  )
}