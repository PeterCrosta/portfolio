import React from 'react'


const Footer = (props) => {
    return (
        <div id='footer'>
            <a href='https://www.linkedin.com/in/peter-crosta/' target='_blank' rel="noopener noreferrer">
                <img className='footer-image' alt='linkedIn logo' src='https://image.flaticon.com/icons/png/512/61/61109.png' />
            </a>
            <a href='https://github.com/PeterCrosta' target='_blank' rel='noopener noreferrer'>
                <img className='footer-image' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png' alt='github logo' />
            </a>
            <a href='mailto:pscrosta@gmail.com'>
                <img className='footer-image' src='https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-512.png' alt='email logo' />
            </a>
        </div>
    )
}

export default Footer