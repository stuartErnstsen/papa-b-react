import { useContext } from 'react'
import { useTransition, animated } from '@react-spring/web';
import PbContext from '../../Context/PbContext';
import Cart from './Cart/Cart';
import Login from './Login/Login';
import Register from './Register/Register';
import './Sidebar.css'


export default function SideBar({ style }) {
    const { user, showRegister } = useContext(PbContext)
    const authContainerTransition = useTransition(showRegister, {
        from: {
            right: -500,
            opacity: 0
        },
        enter: {
            right: 0,
            opacity: 1
        },
        leave: {
            right: -500,
            opacity: 0
        },
    })

    const cartOrLoginTransition = useTransition(user, {
        from: {
            right: -500,
            opacity: 0
        },
        enter: {
            right: 0,
            opacity: 1
        },
        leave: {
            right: -500,
            opacity: 0
        },
    })


    return (
        <animated.div style={style} className='side-bar-container' >
            {cartOrLoginTransition((style, userLoggedIn) =>
                userLoggedIn ? (
                    <animated.section style={style} className='cart-login-transition-container'>
                        <Cart />
                    </animated.section>
                ) : (
                    <animated.section style={style} className="cart-login-transition-container">
                        {authContainerTransition((style, showReg) =>
                            showReg ? (
                                <animated.section style={style} className="auth-container">
                                    <Register />
                                </animated.section>
                            ) : (
                                <animated.section style={style} className="auth-container">
                                    <Login />
                                </animated.section>
                            )
                        )}
                    </animated.section>

                )
            )}

        </animated.div>
    )
}
