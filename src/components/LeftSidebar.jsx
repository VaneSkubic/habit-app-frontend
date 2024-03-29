import React, { useState, useEffect } from 'react'
import { useAuthHeader, useAuthUser } from 'react-auth-kit'
import Search from './Search'

const LeftSidebar = () => {

    const [habitsData, setHabitsData] = useState()

    const authHeader = useAuthHeader()
    const authUser = useAuthUser()

    const followHabit = async (habitId, habitName) => {

        if (habitsData.filter((habit) => habit.id === habitId).length === 0) {
            try {
                const response = await fetch(process.env.REACT_APP_BASE_URL + '/users/' + authUser().id + '/follow/' + habitId, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `${authHeader()}`,
                    },
                })
                const parseRes = await response.json()

            } catch (err) {

            }
            setHabitsData([...habitsData, { id: habitId, name: habitName }])
            habitsData.push({ id: habitId, name: habitName })
            window.location.reload();
        }

    }

    const unfollowHabit = async (habitId) => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/users/' + authUser().id + '/unfollow/' + habitId, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`,
                },
            })
            const parseRes = await response.json()
        } catch (err) {

        }

        setHabitsData(habitsData.filter((habit) => habit.id !== habitId))

        window.location.reload();

    }

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

        } catch (err) {

        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='bg-neutral-100 border-r-2 w-1/3 flex pt-16 justify-center overflow-y-auto'>
            <div className='w-2/3 flex flex-col gap-4'>
                <Search followHabit={followHabit} />
                <h1 className='text-lg font-bold'>Your habits:</h1>
                <div className='flex flex-col gap-1'>
                    {
                        habitsData && habitsData.map((habit) => {
                            return (
                                <h2
                                    onClick={() => unfollowHabit(habit.id)}
                                    key={habit.id}
                                    className='w-full bg-white p-2 rounded-md hover:bg-red-300 cursor-pointer'
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