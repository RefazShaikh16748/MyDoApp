import React from 'react'

const Footer = () => {
  let footerStyle ={
    position:"absolute",
    top:"100",
    width:"100%",
    border:"4px solid yellow"
  }
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; MyDo.com
      </p>
    </div>
  )
}

export default Footer
