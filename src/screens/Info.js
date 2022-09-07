import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header';
import "./Info.css";


const Info = () => {
  const locetion = useLocation()
  console.log(locetion.state);
  const [data, setdata] = useState(locetion.state)
  return (
    <div>
      <Header />

      <div className="body">
        <img className='info_img' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
        <div className="info_text">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img className='info_img2' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
              </div>
              <div className="col-6">
                <p className="info_text2">{data.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info