
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./index.css"

function LegendMovie() {
    const [legendMovie, setLegendMovie] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f9f33a1abf02ec3217e6018fc9fe264a`)
            .then(res => {
                console.log(res.data.results)
                setLegendMovie({ ...res.data.results[3] });
            })
    }, [])
    return (
        <div className="pt-24 " style={{ backgroundSize: "cover", backgroundImage: `URL(https://image.tmdb.org/t/p/w1280${legendMovie.backdrop_path})` }}>
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <h1 className="my-4 text-5xl font-bold leading-tight text-gray-300">
                        {legendMovie.original_title}
                    </h1>
                    <p className="leading-normal text-2xl mb-8 text-gray-300  ">
                        {legendMovie.overview}
                    </p>
                    <button className="mx-auto rounded-sm lg:mx-0 font-bold my-6 py-3 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-white text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">Play</span>
                    </button>
                </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                </div>
            </div>
        </div>
    )
}

export default LegendMovie;


