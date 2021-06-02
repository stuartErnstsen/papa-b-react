import { useState, useEffect } from 'react';

const useTestState = () => {
    const [testState, setTestState] = useState('words')

    useEffect(() => {
        console.log({ testState })
    }, [testState])

    return {
        testState,
        setTestState
    }
}

export default useTestState;