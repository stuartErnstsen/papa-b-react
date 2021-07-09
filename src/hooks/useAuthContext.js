import { useState, useEffect } from 'react';
import axios from 'axios'

const useAuthContext = () => {
    const [user, setUser] = useState(null)

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

    return {
        user,
        setUser
    }
}

export default useAuthContext;