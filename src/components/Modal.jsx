import React from 'react'

const Modal = ({ visible, setVisible }) => {
    return (
        <>
            <div className='w-2/3 shadow-lg p-8 rounded-md flex flex-col gap-8'>
                <h1>Create a new post</h1>
                <div className="flex justify-start">
                    <div className="mb-3">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Caption" aria-label="Search" aria-describedby="button-addon2" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setVisible(false)}>
                        Post
                    </button>
                </div>
            </div>
        </>

    )
}

export default Modal