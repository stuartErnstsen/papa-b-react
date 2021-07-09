import PbContext from './PbContext';
import useAuthContext from '../hooks/useAuthContext';

const PbProvider = (props) => {
    const authContextObj = useAuthContext();

    return (
        <PbContext.Provider
            value={{
                ...authContextObj
            }}>
            {props.children}
        </PbContext.Provider>
    )
}

export default PbProvider;