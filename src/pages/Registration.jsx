import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='pb-8 font-bold text-5xl'>Sign up</h1>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First name" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last name" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <Link to='/'>
                <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign up
                </button>
            </Link>
            <Link className='text-blue-500' to='/login'>
                Log in
            </Link>
        </div>
    )
}

export default Registration