import './Navigation.css';
import React, { useState } from 'react';
import cat from '../cat.svg';
import bars from '../bars.svg';

function Navigation() {
    const [isExpanded, setisExpanded] = useState(false);

    return (
        <>
            <div className='nav'>
                <img className='cat-picture' src={cat} alt='Cat logo' />
                <p className='title'>Kristina's Website</p>
                <div className='items'>
                    <a className='active' href='.'>Home</a>
                    <a href='.'>Portfolio</a>
                    <a href='.'>Blog</a>
                    <a href='.'>About Me</a>
                    <a href='.'>Contact Me</a>
                </div>
                <img className='icon' src={bars} alt='side bars' onClick={() => {
                    setisExpanded(!isExpanded);
                }} />
            </div>
                <div className={isExpanded ? "expanded-nav" : "un-expanded-nav"}>
                <div className='expanded-items'>
                    <a className='active' href='.'>Home</a>
                    <a href='.'>Portfolio</a>
                    <a href='.'>Blog</a>
                    <a href='.'>About Me</a>
                    <a href='.'>Contact Me</a>
                </div>
            </div>
         </>
    )
}

export { Navigation };