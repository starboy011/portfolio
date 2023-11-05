import React from 'react'

const links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className='links'>
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  )
}

export default links
