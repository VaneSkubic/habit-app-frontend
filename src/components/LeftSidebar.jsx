import React, { useState, useEffect } from 'react'
import { useAuthHeader } from 'react-auth-kit'
import Search from './Search'

const LeftSidebar = () => {

    const [habitsData, setHabitsData] = useState()

    const authHeader = useAuthHeader()

    const getUserInfo = async () => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/user/habits', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })
            const parseRes = await response.json()
            setHabitsData(parseRes.data)
            console.log(parseRes)

        } catch (err) {

        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='bg-neutral-100 border-r-2 w-1/3 flex pt-16 justify-center overflow-y-auto'>
            <div className='w-2/3 flex flex-col gap-4'>
                <Search />
                <h1 className='text-lg font-bold'>Your habits:</h1>
                <div className='flex flex-col gap-1'>
                    {
                        habitsData && habitsData.map((habit) => {
                            return (
                                <h2
                                    key={habit.id}
                                    className='bg-white w-fit p-2 rounded-md'
                                >{habit.name}</h2>
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