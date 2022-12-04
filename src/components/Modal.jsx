import React from 'react'

const Modal = ({ visible, setVisible }) => {
    return (
        <>
            {
                visible &&
                <div className='fixed backdrop-blur-sm inset-0 bg-black/30 flex items-center justify-center'>
                    <div className='p-8 rounded-md bg-neutral-100 w-1/2 flex flex-col gap-8'>
                        <h1>Create a new post:</h1>
                        <div className='flex justify-between'>
                            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => setVisible(false)}>
                                Cancel
                            </button>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setVisible(false)}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Modal