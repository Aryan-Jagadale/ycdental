import React from 'react'

const RecognitionInner = ({img,title}) => {
  return (
    <div className="main-card mt-20 font-fam lg:mt-2">
    <img
      className="main-card-img"
      src={img}
      alt=""

    />
    <h2>{title}</h2>
  </div>
  )
}

export default RecognitionInner