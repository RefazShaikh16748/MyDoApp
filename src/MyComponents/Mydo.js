import React from 'react'
import DosList from './DosList'
const Mydo = (props) => {
  return (
    <div className='container'>
      <h3 className="text-center my-3">My Do List</h3>
      {props.mydos.length=== 0? "No Do List to display":
      props.mydos.map((mydo)=>{
      return <DosList mydo = {mydo} key={mydo.slno} onDelete={props.onDelete}/>
    })
  }  
    </div>
  )
}

export default Mydo
