import { useContext } from 'react';
import PbContext from '../../../Context/PbContext';

export default function Login() {
    const { setShowRegister, input, handleInput, handleLogin } = useContext(PbContext)
    const { email, password } = input
    return (

        <section className="login-container">
            <form onSubmit={handleLogin}>
                <input name='email' value={email} onChange={(e) => handleInput(e)} placeholder='Email' />
                <input name='password' value={password} onChange={(e) => handleInput(e)} placeholder='password' />
                <button type='submit'>LOGIN</button>
            </form>
            <button onClick={() => setShowRegister(true)}>REGISTER</button>
        </section>
    )
}
