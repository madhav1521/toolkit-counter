import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authActions } from '../Redux-Toolkit/store';

function Header() {
    const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }
    return (
        <React.Fragment>
            <ul className='auth-header'>
                <h2>Authentication</h2>
                {isAuth && (
                    <div className='subNav'>
                        <li>About</li>
                        <li>Contact Us</li>
                        <button type='button' onClick={logoutHandler}>Logout</button>
                    </div>
                )}
            </ul>
        </React.Fragment>
    )
}

export default Header
