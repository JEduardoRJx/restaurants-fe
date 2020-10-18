import React from 'react';
import { TableItem} from './TableItem'

export const TableSection = () => {
  return (
    <section className="section has-background-primary">
      <h1 className="title">Section</h1>

      
      {/* <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
      <TableItem />
    </section>
  )
}