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
            <div className="row p-5">
              <h1 className="info-title1">On Demand <span className='span text-warning'>-Films</span></h1>
              <div className="col-4 ">
                <img className='info_img2' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
              </div>
              <div className="col-5">
                <div className="col_4-top">
                  <p className="col_4-text">2 uur 48min. 2020</p>
                  <p className="col_4-info">18+</p>
                  <p className="col_4-info">X-ray</p>
                  <p className="col_4-info">HDR</p>
                  <p className="col_4-info">UHD</p>
                  <p className="col_4-info">4K</p>
                </div>
                <p className="info_text2">{data.overview}</p>
                <button className='col_4-button'>Play Movie for $8</button>
                <button className='col_4-button2'>Trailer</button>
              </div>
              <div className="col-3">
                <div className="col_3">
                  <p className="col_3-text">
                    <span className='col_span text-warning'>Director:</span>
                    Royan Googler
                  </p>
                  <p className="col_3-text">
                    <span className='col_span text-warning '>Writers:</span>
                    Royan Googler, <br /> Joe Robert Cole
                  </p>
                  <p className="col_3-text">
                    <span className='col_span text-warning'>Stars:</span>
                    Chadwick Boseman, <br /> Michiael B.Jordan, Lupita Nyong'yo 
                  </p>
                </div>
                <div className="img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info