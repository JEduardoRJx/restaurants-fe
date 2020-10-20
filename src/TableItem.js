import React, { useState } from 'react';

export const TableItem = ({ rest }) => {
  const [renderInfo, setRenderInfo] = useState(false)

  const toggleRenderInfo = () => {
    setRenderInfo(!renderInfo);
  }
  
  const renderMoreInfo = (rest) => {
    console.log('rest', rest);
    return (
      <>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>

      <footer className="card-footer">
        <a href="#" className="card-footer-item"
          onClick={() => toggleRenderInfo()}>Close</a>
      </footer>
      </>
    )
  }

  const renderArrowIcon = () => {
    if (renderInfo) {
      return (
        <span className="icon">
          <i className="fas fa-angle-up" aria-hidden="true"></i>
        </span>
      )
    } else {
      return (
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      )
    }
  }
  
  return (
    <div className="card mt-4">
      <header className="card-header is-block-touch">
        <p className="card-header-title is-size-5-touch">{rest.name}</p>
        <p className="card-header-title is-size-6-mobile py-0">{rest.city}, {rest.state}</p>
        <p className="card-header-title is-size-6-mobile py-0">{rest.telephone}</p>
        <p className="card-header-title is-size-6-mobile py-0">{rest.genre}</p>

        <a className="card-header-icon" aria-label="more options"
          onClick={() => toggleRenderInfo()}>
          {renderArrowIcon()}
        </a>
      </header>
      {renderInfo && renderMoreInfo(rest)}
    </div>
  )
}