import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './index.css'

function CarouselView() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f9f33a1abf02ec3217e6018fc9fe264a`)
            .then(res => {
                setMovies([...res.data.results]);
            })
    }, [])
    return (
        <section className=" border-b py-8" >
            <div className="container mx-auto flex flex-wrap pt-4 pb-12" >
                <h5 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-300 " >
                    Popular On Flix
                </h5>
                <div className="w-full mb-4" >
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" > </div>
                </div>
                <div className="carousel" >
                    <div className="carousel-row" > {
                        movies && movies.length && movies.map((movie) => {
                            return <div className="carousel-tile"
                                key={movie.id}
                                style={{ backgroundSize: "cover", backgroundImage: `URL(https://image.tmdb.org/t/p/w400${movie.backdrop_path})` }} ></div>
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarouselView;