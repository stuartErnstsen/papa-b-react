import { useContext } from 'react';
import PbContext from '../../../Context/PbContext';

const Register = () => {
    const { setShowRegister } = useContext(PbContext)
    return (
        <div>
            REGISTER
            <button onClick={() => setShowRegister(false)}>REGISTER</button>
        </div>
    )
}

export default Register;
