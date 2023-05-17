import React, { useState, useEffect } from 'react'
import { useAuthHeader, useAuthUser } from 'react-auth-kit'
import Search from './Search'

const CreatePost = ({ id, onMakePost, edit = false, setEditable, setEditableCaption, existingCaption = '', habit, name = '', src = '' }) => {

    const [caption, setCaption] = useState('')
    const [image, setImage] = useState([])
    const [habitId, setHabitId] = useState()
    const [habitName, setHabitName] = useState()
    const [visible, setVisible] = useState(false)

    const authHeader = useAuthHeader()

    const onSubmit = async () => {

        setVisible(false)

        try {
            var data = new FormData()
            data.append('media', image)
            data.append('caption', caption)
            data.append('habit_id', habitId)
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/posts/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`,
                },
                body: data,
            })

            setCaption('')
            setHabitId(null)
            setHabitName(null)
            setImage(null)
            window.location.reload();

        } catch (err) {
            console.log(err.message)
        }

    }

    const onSubmitEdit = async () => {

        try {
            var data = new FormData()
            data.append('caption', caption)
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/posts/' + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`
                },
                body: data,
            })
            const parseRes = await response.json()

            setCaption('')
            setHabitId(null)
            setHabitName(null)
            setImage(null)

        } catch (err) {
            console.log(err.message)
        }

        setEditable(false)
        setEditableCaption(caption)
    }

    const cancelEdit = () => {
        setEditable(false)
    }

    const toggleModal = () => {
        setVisible(!visible)
    }

    const authUser = useAuthUser();

    if (!edit) {
        return (
            <>
                <div className='w-2/3 shadow-lg p-8 rounded-md flex flex-col gap-8'>
                    <div className='flex justify-between'>
                        <h1>Create a new post</h1>
                        <button onClick={toggleModal} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Toggle</button>
                    </div>
                    {visible &&
                        <>
                            <div className="flex justify-center">
                                <div className="flex w-full">
                                    <div className="input-group relative flex flex-wrap items-stretch w-full">
                                        <textarea onChange={(e) => setCaption(e.target.value)} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={"Caption"} aria-label="Search" aria-describedby="button-addon2" />
                                    </div>
                                </div>
                            </div>
                            {habitId ? <div className='bg-neutral-200 w-fit p-2 rounded-md'>
                                {habitName}
                            </div> : <Search userLimited={true} id={authUser().id} setHabitId={setHabitId} setHabitName={setHabitName} />}
                            <div className='pb-4'>
                                <input type='file' accept='image/jpg, image/png, image/jpeg' onChange={(e) => setImage(e.target.files[0])} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pl-4 rounded' />
                            </div>
                            <div className='flex justify-end'>
                                <button disabled={habitId === undefined} onClick={onSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                    Post
                                </button>
                            </div>
                        </>

                    }
                </div>
            </>

        )
    } else {
        return (
            <>
                <div className='w-2/3 shadow-lg p-8 rounded-md flex flex-col gap-8'>
                    <>
                        <div className="flex row items-center">
                            <img className="w-12 h-12 rounded-full mr-4" src={src} alt="" />
                            <h3>{name}</h3>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex w-full">
                                <div className="input-group relative flex flex-wrap items-stretch w-full">
                                    <textarea defaultValue={existingCaption} onChange={(e) => setCaption(e.target.value)} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={"Caption"} aria-label="Search" aria-describedby="button-addon2" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-neutral-200 w-fit p-2 rounded-md'>
                            {habit}
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={cancelEdit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Cancel
                            </button>
                            <button onClick={onSubmitEdit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Confirm edit
                            </button>
                        </div>
                    </>
                </div>
            </>
        )
    }

}

export default CreatePost