import React from 'react'

const toggleButton = ({setOpen}) => {
  return (
   <button onClick={()=> setOpen((prev)=> !prev)}></button>
  )
}

export default toggleButton
