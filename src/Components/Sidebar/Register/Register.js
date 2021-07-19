import { useContext } from 'react';
import PbContext from '../../../Context/PbContext';

const Register = () => {
    const { setShowRegister, input, handleInput, handleRegister } = useContext(PbContext)
    const { email, password } = input

    return (
        <>
            <form onSubmit={handleRegister} className="login-form">
                <input name='email' value={email} onChange={(e) => handleInput(e)} placeholder='Email' />
                <input name='password' value={password} onChange={(e) => handleInput(e)} placeholder='password' />
                <button type='submit'>REGISTER NEW ACCOUNT</button>
            </form>
            <button onClick={() => setShowRegister(false)}>HAVE AN ACCOUNT? LOGIN HERE</button>
        </>

    )
}

export default Register;
