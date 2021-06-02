import { useState } from 'react';
import PbContext from './PbContext';
import useTestState from '../hooks/useTestState';

const PbProvider = (props) => {
    const [test, setTest] = useState('YOYOOYOY')
    const testStateObj = useTestState();
    return (
        <PbContext.Provider
            value={{
                test,
                ...testStateObj
            }}>
            {props.children}
        </PbContext.Provider>
    )
}

export default PbProvider;