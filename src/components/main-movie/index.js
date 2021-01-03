
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data as movies } from '../../mock.data';

function LegendMovie() {
    const [legendMovie, setLegendMovie] = useState({})
    useEffect(() => {

        setLegendMovie({ ...movies.results[3] });

        // MOCK not to exceed quote
        // axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f9f33a1abf02ec3217e6018fc9fe264a`)
        //     .then(res => {
        //         console.log(res.data.results)
        //         const persons = res.data;
        //         setLegendMovie({ persons });
        //     })
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
                    <button className="mx-auto lg:mx-0 hover:underline text-gray-300 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-gray-600">
                        Watch
          </button>
                </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                </div>
            </div>
        </div>
    )
}

export default LegendMovie;


