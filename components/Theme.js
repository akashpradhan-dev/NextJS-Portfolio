import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice'

const Theme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(toggleTheme(theme));
        console.log(theme);
    }
    return (
        <>
            <div className='theme-btn' onClick={changeTheme}>
                <i className='fas fa-adjust'></i>
            </div>
        </>
    )
}

export default Theme