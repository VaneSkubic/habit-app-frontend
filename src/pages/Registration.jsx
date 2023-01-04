import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'

const Registration = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const signIn = useSignIn()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    password_confirmation: passwordConf,
                    first_name: firstName,
                    last_name: lastName,
                    username: username
                })
            })
            const parseRes = await response.json()

            setError(parseRes.message)

            signIn({
                token: parseRes.token,
                authState: { email: parseRes.user.email, isAdmin: parseRes.user.is_admin },
                expiresIn: 3600,
                tokenType: 'Bearer'
            })

            navigate('/');

        } catch (err) {
            setShowError(true)
        }

    }

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='pb-8 font-bold text-5xl'>Sign up</h1>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First name" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last name" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => setUsername(e.target.value)} type="email" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Username" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => setPasswordConf(e.target.value)} type="password" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password confirmation" aria-label="Search" aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            {showError && <p className='text-red-500 pb-8'>{error}</p>}
            <Link onClick={onSubmit} to='/' className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign up
            </Link>
            <Link className='text-blue-500' to='/login'>
                Log in
            </Link>
        </div>
    )
}

export default Registration