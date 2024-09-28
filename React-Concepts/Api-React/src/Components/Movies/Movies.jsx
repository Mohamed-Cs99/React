import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Movies() {

    let [Movies, setMovies] = useState([]);
    async function getMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=0761cd2cd3336628ca4f0db6911a4d34`);

        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [])



    return (
        <>

            <div className="container-fluid  py-5">
                <div className="row">
                    {Movies.length > 0 ?
                        Movies.map((movie) => (
                            <div className="col-md-3 py-1 text-center ">
                                <div className="movieItm bg-light py-1 position-relative">
                                    <img className=' w-100' src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="movie image" />
                                    <h3 className=' lead text-muted font-weight-bolder  '>{movie.title}</h3>
                                    <p className='lead text-muted'>{movie.overview.split(" ").slice(0, 20).join(" ")}</p>
                                    <div className='rate position-absolute  bg-secondary text-white font-weight-bolder p-3'>
                                        {Math.floor(movie.vote_average)}
                                    </div>
                                </div>

                            </div>
                        )) : <div className="loading  vh-100 w-100 d-flex align-items-center  justify-content-center ">
                            <div className="item">
                                <span  className="loader "></span>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </>
    )
}
