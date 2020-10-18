import React from 'react';

export const TableItem = ({ rest }) => {
  // console.log('props', rest)
  
  return (
    <div className="card">
      <header className="card-header is-block-touch">
        {/* <p className="card-header-title is-size-7-mobile">{item.name}{item.city}, {item.state} {item.telephone}</p> */}
        <p className="card-header-title is-size-5-touch">{rest.name}</p>
        <p className="card-header-title is-size-6-mobile py-0">{rest.city}, {rest.state}</p>
        <p className="card-header-title is-size-6-mobile py-0">{rest.telephone}</p>
        <p className="card-header-title is-size-6-mobile py-0">{rest.genre}</p>
        {/* <p className="card-header-title">{item.name} | {item.city}, {item.state} | {item.telephone}</p> */}

        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>

      {/* <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div> */}

      {/* <footer className="card-footer">
        <a href="#" className="card-footer-item">Close</a>
      </footer> */}
    </div>
  )
}