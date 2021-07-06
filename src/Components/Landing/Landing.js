import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './Landing.css';

const Landing = (props) => {
    const [showCart, setShowCart] = useState(false)
    const cartContainerTransition = useTransition(showCart, {
        from: { right: -500 },
        enter: { right: 0 },
        leave: { right: -500 },
    })
    return (
        <main className='landing'>
            <button onClick={() => setShowCart(old => !old)}>click</button>
            {`${showCart}`}
            <section>
                {cartContainerTransition((style, item) =>
                    item ? <animated.div style={style} className='cart' /> : null
                )}
            </section>
        </main>
    )
}

export default Landing;