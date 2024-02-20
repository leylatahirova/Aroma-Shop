import React from 'react'
import '../styles/PagesBanner.sass';

export default function PagesBanner({text1,text2}) {
  return (
    <div className='banner-text'>
        <h1>{text1}</h1>
        <p>{text2}</p>
    </div>
  )
}
