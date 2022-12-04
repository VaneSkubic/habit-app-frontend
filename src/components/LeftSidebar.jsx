import React from 'react'

const LeftSidebar = () => {
    return (
        <div className='bg-neutral-100 border-r-2 w-1/3 flex pt-16 justify-center'>
            <div className='w-2/3 flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Communities:</h1>
                <div className='flex flex-col gap-1'>
                    <h2>Community 1</h2>
                    <h2>Community 2</h2>
                    <h2>Community 3</h2>
                    <h2>Community 4</h2>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar

// https://server.drek.com/api/posts