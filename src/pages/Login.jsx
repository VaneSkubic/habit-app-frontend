import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSignIn } from 'react-auth-kit'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const signIn = useSignIn()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })
            const parseRes = await response.json()

            setError(parseRes.message)

            signIn({
                token: parseRes.token,
                authState: { email: parseRes.user.email },
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
            <h1 className='pb-8 font-bold text-5xl'>Log in</h1>
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
            {showError && <p className='text-red-500 pb-8'>{error}</p>}
            <Link onClick={onSubmit} to='/' className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Log in
            </Link>
            <Link className='text-blue-500' to='/registration'>
                Sign up
            </Link>
        </div>
    )
}

export default Login