import React from 'react'

function Header() {
    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        <img src="assets/flix.png" className="w-16 h-8" />
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 text-gray-500 hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-gray-300 p-4 lg:p-0 z-20" >
                    <ul className="list-reset lg:flex justify-start flex-1 items-center">
                        <li className="mr-2">
                            <a className="inline-block py-2 px-4 text-gray-300 font-bold no-underline" href="#">Home</a>
                        </li>
                        <li className="mr-2">
                            <a className="inline-block text-gray-300 no-underline hover:text-gray-300 hover:text-underline py-2 px-4" href="#">TV Shows</a>
                        </li>
                        <li className="mr-2">
                            <a className="inline-block text-gray-300 no-underline hover:text-gray-300 hover:text-underline py-2 px-4" href="#">Movies</a>
                        </li>
                        <li className="mr-2">
                            <a className="inline-block text-gray-300 no-underline hover:text-gray-300 hover:text-underline py-2 px-4" href="#">New & Popular</a>
                        </li>
                        <li className="mr-2">
                            <a className="inline-block text-gray-300 no-underline hover:text-gray-300 hover:text-underline py-2 px-4" href="#">My List</a>
                        </li>
                    </ul>
                    <button
                        className="mx-auto lg:mx-0 hover:underline text-gray-300 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                        Account
                    </button>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    )
}

export default Header;
