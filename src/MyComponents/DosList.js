import React from 'react'

const DosList = ({mydo, onDelete}) => {
  return (
    <div>
      <h4>{mydo.title}</h4>
      <p>{mydo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(mydo)}}>Delete</button>
    </div>
  )
}

export default DosList