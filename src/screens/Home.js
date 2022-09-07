import React, { useEffect, useState } from 'react';
import { GrConfigure } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { BsFillPlayCircleFill } from 'react-icons/bs';

import "./Home.css";

const Home = () => {
    const axios = require('axios').default;
    const [data, setData] = useState([]);
    const My_key = "51cc7f5f459038d8f6fd27150449d6a1"
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${My_key}&language=en-US&page=1`)
            .then((v) => {
                console.log(v.data.results);
                setData(v.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const naviget = useNavigate()
    const GrConfigure = (v) => {
        naviget('/info',
            {
                state: v
            }
        )
    }

    return (

        <div className='bg'>
            <Header />
            <div className="row">
                <div className="col-3">
                    <div className="top">
                        <h5 className='home_title'>
                            New traliers
                        </h5>
                        <p className='home_title'>
                            Today
                            sort Bay
                        </p>
                    </div>
                    <div className="home_card">
                        <div className="home_title1">
                            <p className="home_icons"><BsFillPlayCircleFill /></p>
                            <p className="home_name">Bheeshma Parvam </p>
                            <div className="border"></div>
                            <p className="sana">02:59</p>
                        </div>
                    </div>
                    <div className="bottom">

                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        {
                            (data.length > 0) ? (
                                data.map((v, i) => {
                                    return <div className='col-4'>
                                        <div className="card" onClick={() => GrConfigure(v)}>
                                            <img className='map_img' src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="" />
                                            <div className="home_map-bottom">
                                                <h5 className="title"> {v.title} </h5>
                                                <p className="home_data">{v.release_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                })


                            ) : (<h1>malumot yoq</h1>)
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home