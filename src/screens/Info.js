import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Info = () => {
  const locetion = useLocation()
  console.log(locetion.state);
  const [data, setdata] = useState(locetion.state)
  return (
    <div>
        {/* <img className='info_img' src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="" /> */}
    </div>
  )
}

export default Info