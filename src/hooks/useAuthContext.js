import { useState, useEffect } from 'react';
import axios from 'axios'

const useAuthContext = () => {
    //User object from session is saved to context if it exists.
    const [user, setUser] = useState(null)
    const [showRegister, setShowRegister] = useState(false)
    //State for user input on Login and Register
    const [input, setInput] = useState({
        email: '',
        username: '',
        password: '',
        passwordValidate: '',
        firstName: '',
        lastName: ''
    })

    useEffect(() => {
        console.log({ user })
    }, [user])

    useEffect(() => {
        axios.get('/auth/user')
            .then(res => setUser(res.data))
            .catch(err => {
                if (err.response?.data === 'not found') {
                    console.log('Current user has no session')
                } else {
                    console.log(err)
                }
            })
    }, [])

    const handleInput = (e) => {
        setInput(prevInput => {
            return {
                ...prevInput,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = input
        axios.put('/auth/login', { email, password })
            .then(res => {
                setUser(res.data)
                console.log('You are now logged in: ', res.data)
            })
            .catch(err => console.log(err))
    }

    const handleRegister = () => {
        const { email, password, firstName, lastName } = input
        const body = {
            email,
            password,
            firstName,
            lastName
        }
        axios.post('/auth/register', body)
            .then(res => {
                setUser(res.data)
                console.log('New user created and logged in: ', res.data)
            })
            .catch(err => console.log(err))
    }

    return {
        user,
        setUser,
        input,
        setInput,
        handleInput,
        showRegister,
        setShowRegister,
        handleLogin,
        handleRegister
    }
}

export default useAuthContext;