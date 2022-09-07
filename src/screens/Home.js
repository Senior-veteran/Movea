import React, { useEffect, useState } from 'react';
import { GrConfigure } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
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

                    <div className="bottom">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia molestias laudantium, error ex cumque ipsam a minus dicta vel ab perferendis, nemo et assumenda molestiae magnam eligendi eius nobis veniam illo deleniti esse incidunt. Molestiae, eius officia fuga quisquam recusandae sed laudantium delectus tempora, explicabo ipsam amet! Eos quas in facere, odit quaerat eum. Possimus quaerat distinctio voluptatum aperiam dolorum similique, eum atque commodi cupiditate ducimus voluptatem, repellat a est quis labore blanditiis deleniti accusantium maiores sequi recusandae consequatur quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui itaque maxime exercitationem. <br /> <br /> Illum facere mollitia dignissimos debitis autem nemo suscipit alias, quidem culpa eos atque a fugiat quibusdam necessitatibus, obcaecati cum quo itaque officia quia perferendis molestiae fuga eligendi, hic quod. Quis, itaque. Repudiandae accusamus quo amet illo aperiam repellendus illum obcaecati fugit, eum voluptatum dolore placeat eos omnis delectus sequi deleniti animi! Tenetur, laudantium? Necessitatibus cupiditate pariatur, neque ullam debitis assumenda laboriosam omnis modi vel odio molestiae et, iure natus minima officiis esse quam at velit nisi veritatis in hic exercitationem incidunt excepturi? Iste modi deleniti provident sint!
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
                                            <h5 className="title"> {v.title} </h5>
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