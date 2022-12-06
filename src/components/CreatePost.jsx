import React, { useState, useEffect } from 'react'
import { useAuthHeader } from 'react-auth-kit'
import Search from './Search'

const CreatePost = () => {

    const [caption, setCaption] = useState('')
    const [image, setImage] = useState([])
    const [habitId, setHabitId] = useState()
    const [habitName, setHabitName] = useState()

    const authHeader = useAuthHeader()

    const onSubmit = async () => {

        try {
            var data = new FormData()
            data.append('media', image)
            data.append('caption', caption)
            data.append('habit_id', habitId)
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/posts/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`
                },
                body: data,
            })
            const parseRes = await response.json()

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <>
            <div className='w-2/3 shadow-lg p-8 rounded-md flex flex-col gap-8'>
                <h1>Create a new post</h1>
                <div className="flex justify-start">
                    <div className="">
                        <div className="input-group relative flex flex-wrap items-stretch w-full">
                            <input onChange={(e) => setCaption(e.target.value)} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Caption" aria-label="Search" aria-describedby="button-addon2" />
                        </div>
                    </div>
                </div>
                {habitId ? <div className='bg-neutral-200 w-fit p-2 rounded-md'>
                    {habitName}
                </div> : <Search setHabitId={setHabitId} setHabitName={setHabitName} />}
                <div className='pb-4'>
                    <input type='file' accept='image/jpg, image/png, image/jpeg' onChange={(e) => setImage(e.target.files[0])} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />
                </div>
                <div className='flex justify-end'>
                    <button disabled={habitId === undefined} onClick={onSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Post
                    </button>
                </div>
            </div>
        </>

    )
}

export default CreatePost