import React from 'react'

export const PageTitles = (props) => {
  return (
    <div>
    <hr></hr>
        <h2 className='m-4 fs-1 text-center page-title'> {props.title}</h2>
    </div>
  )
}
