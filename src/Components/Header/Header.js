import { useContext } from 'react';
import PbContext from '../../Context/PbContext';
import './header.css';

const Header = (props) => {
    const { handleLogout, user } = useContext(PbContext)

    return (
        <header className='header'>
            <div>
                <h1>LOGO</h1>
            </div>
            {user
                ? <h2 onClick={handleLogout}>LOGOUT</h2>
                : null
            }

            {/* <nav>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header