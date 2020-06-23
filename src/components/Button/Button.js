import React from 'react';

const Button = ({handleClickBtn}) => {
  return (
    <button type="button" onClick={handleClickBtn} className="Button" >Load more</button>
  )
}

export default Button;