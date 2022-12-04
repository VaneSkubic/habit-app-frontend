import React from 'react'
import profile from '../assets/profile.jpg'
import Modal from './Modal'
import { useState } from 'react'
import { useSignOut, useAuthHeader } from 'react-auth-kit'

const RightSidebar = () => {
    const [visible, setVisible] = useState(false)

    const signOut = useSignOut()
    const authHeader = useAuthHeader()

    const logOut = async () => {

        try {
            const response = await fetch('http://192.168.64.115:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

        } catch (err) {

        }

        signOut()
    }

    return (
        <div className='bg-neutral-100 border-l-2 w-1/3 flex py-16 justify-center'>
            <div className='w-2/3 flex flex-col gap-4 justify-between'>
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-row items-center">
                        <img className='h-16 pr-4' src={profile} alt="" />
                        <h3>Janez Primer</h3>
                    </div>
                    <button onClick={() => setVisible(!visible)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Post
                    </button>
                </div>
                <button onClick={logOut} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Log out
                </button>
                <Modal setVisible={setVisible} visible={visible} />
            </div>
        </div>
    )
}

export default RightSidebar