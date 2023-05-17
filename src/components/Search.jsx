import React, { useState, useEffect } from 'react'
import { useAuthHeader } from 'react-auth-kit'

const Search = ({ setHabitId, setHabitName, followHabit }) => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('*')

    const authHeader = useAuthHeader()

    const searchHabits = async () => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/habits/search/' + query, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

            const parseRes = await response.json()
            setData(parseRes)

        } catch (err) {

        }

    }

    useEffect(() => {
        if (query !== '') {
            searchHabits()
        } else {
            setData([])
        }
    }, [query])


    return (
        <div>
            <div className="flex justify-center">
                <div className="input-group relative flex flex-wrap items-stretch w-full">
                    <input onChange={(e) => setQuery(e.target.value)} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                </div>
            </div>
            <div className='bg-white rounded-sm'>
                {data.map((habit) => {
                    return (
                        <h2
                            key={habit.id}
                            className='px-4 py-2 hover:cursor-pointer hover:pl-5 transition-all'
                            onClick={function () {
                                if (followHabit) {
                                    followHabit(habit.id, habit.name)
                                }
                                if (setHabitId) {
                                    setHabitId(habit.id)
                                }
                                if (setHabitName) {
                                    setHabitName(habit.name)
                                }
                            }}
                        >{habit.name}</h2>
                    )
                })}
            </div>
        </div>
    )
}

export default Search