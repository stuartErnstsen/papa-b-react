import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
// import axios from 'axios';
// import PbContext from '../../Context/PbContext'
import './Landing.css';

const Landing = (props) => {
    // const { setUser } = useContext(PbContext)
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [showCart, setShowCart] = useState(false)
    const cartContainerTransition = useTransition(showCart, {
        from: { right: -500 },
        enter: { right: 0 },
        leave: { right: -500 },
    })

    const handleLogin = (e) => {
        e.preventDefault()

    }


    return (
        <main className='landing'>
            <section className='item-container'>
                <div className='item-inner-container'>
                    <div className='item-inner-left'>
                        <img src='https://cdn.shopify.com/s/files/1/1363/7665/products/30ml_bottle.png?v=1536367945' alt='juice' />
                    </div>
                    <div className='item-inner-right'>
                        <h2>BRAD'S GNL</h2>
                        <p>Do veniam reprehenderit laborum ipsum quis in dolore mollit excepteur. Duis non exercitation sit adipisicing tempor ullamco laboris sit labore magna exercitation ut. Pariatur ullamco laboris ut pariatur elit consectetur. Duis proident et elit adipisicing proident ea irure non aliqua commodo ullamco pariatur irure irure. Do nulla esse labore ipsum culpa pariatur ullamco dolore pariatur cupidatat ex.</p>
                    </div>
                </div>
                <button className='buy-button' onClick={() => setShowCart(old => !old)}>BUY</button>
            </section>
            {cartContainerTransition((style, item) =>
                item ? (
                    <animated.div style={style} className='cart' >
                        <form onSubmit={handleLogin}>
                            <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder='Email' />
                            <input value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder='password' />
                            <button type='submit'>LOGIN</button>
                        </form>

                    </animated.div>
                ) : null
            )}
        </main>
    )
}

export default Landing;