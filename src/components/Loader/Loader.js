import Loader from 'react-loader-spinner';

import React from 'react';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spiner = () => {
  return (
    <div className="Spiner">
      <Loader type="ThreeDots"
              color="#00BFFF"
              height={100}
              width={100} />
    </div>
  )
}

export default Spiner;
