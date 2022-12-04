import React, { useState, useEffect } from 'react'
import { useAuthHeader } from 'react-auth-kit'

const LeftSidebar = () => {

    const [habitsData, setHabitsData] = useState()

    const authHeader = useAuthHeader()

    const getUserInfo = async () => {

        try {
            const response = await fetch('http://192.168.64.115:8000/api/habits', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })
            const parseRes = await response.json()
            setHabitsData(parseRes.data)

        } catch (err) {

        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='bg-neutral-100 border-r-2 w-1/3 flex pt-16 justify-center'>
            <div className='w-2/3 flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Your habits:</h1>
                <div className='flex flex-col gap-1'>
                    {
                        habitsData && habitsData.map((habit) => {
                            return (
                                <h2>{habit.name}</h2>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar

// https://server.drek.com/api/posts