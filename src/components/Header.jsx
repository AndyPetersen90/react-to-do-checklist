import React from 'react';
import {Link} from 'react-router-dom'

function Header () {
    return(
        <header>
            <h2>F22 Demo List Thing </h2>
            <nav>
                <Link to="/">
                    <button className='nav-btn'>Home</button>
                </Link>
                <Link to="/tasks">
                    <button className='nav-btn'>Tasks</button>
                </Link>
                <Link to="/team">
                    <button className='nav-btn'>Team</button>
                </Link>
            </nav>
        </header>

    );
};

/* can also be written as an arrow function
const Header = () => {
    return (
        <header></header>
    )
}
*/

export default Header;