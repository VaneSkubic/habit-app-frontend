import React from 'react'
import profile from '../assets/profile.jpg'
import Modal from './Modal'
import { useState, useEffect } from 'react'
import { useSignOut, useAuthHeader } from 'react-auth-kit'

const RightSidebar = () => {
    const [visible, setVisible] = useState(false)
    const [userData, setUserData] = useState()

    const signOut = useSignOut()
    const authHeader = useAuthHeader()

    const getUserInfo = async () => {

        try {
            const response = await fetch('http://192.168.64.115:8000/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })
            const parseRes = await response.json()
            setUserData(parseRes.data)

        } catch (err) {

        }
    }

    const logOut = async () => {

        try {
            await fetch('http://192.168.64.115:8000/api/logout', {
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

    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <div className='bg-neutral-100 border-l-2 w-1/3 flex py-16 justify-center'>
            <div className='w-2/3 flex flex-col gap-4 justify-between'>
                <div className='flex flex-col gap-8'>
                    <div className="flex flex-row items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={userData?.media.media_url} alt="" />
                        <h3>{userData?.first_name} {userData?.middle_name} {userData?.last_name}</h3>
                    </div>
                    <button onClick={() => setVisible(!visible)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Post
                    </button>
                </div>
                <button onClick={logOut} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default RightSidebar