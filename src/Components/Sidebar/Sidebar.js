import { useContext } from 'react'
import { animated } from '@react-spring/web';
import PbContext from '../../Context/PbContext';
import Cart from './Cart/Cart';
import Login from './Login/Login';
import Register from './Register/Register';

export default function SideBar({ style }) {
    const { user, showRegister } = useContext(PbContext)
    return (
        <animated.div style={style} className='side-bar-container' >
            {user ? (
                <Cart />
            ) : (
                showRegister
                    ? <Register />
                    : <Login />
            )}

        </animated.div>
    )
}
