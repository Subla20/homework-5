import './WebPage.css';
import React from 'react';
import { Navigation } from '../Navigation';
import muffin from '../muffin.jpg';
import nibbles from '../nibbles.jpg';
import kirby from '../kirby.png';
import urchin from '../urchin.jpg';
import worm from '../worm.jpg';
import fear from '../fear.jpg';

function WebPage() {
    const photos = [
        {photo: nibbles, text: "Nibbles"}, 
        {photo: kirby, text: "Kirby"},
        {photo: urchin, text: "Urchin"},
        {photo: worm, text: "Worm"},
        {photo: fear, text: "Fear"}
]

    return (
        <>
        <Navigation />
        <img className='muffin-small' src={muffin}  alt='My cat muffin' />
        <div className='top'>
            <div className='left'>
                <h1>Welcome to Responsive Web Design</h1>
                <p>Hello, this is my website with my projects that include responsive web design.
                    There are several pictures here that will may interest you. They might seem like they
                    have nothing to do with responsive web design but they actually do. They will move as the 
                    size of the screen changes.
                </p>
            </div>
            <div className='right'>
                <img className='muffin' src={muffin}  alt='My cat muffin' />
            </div>
        </div>
        <div className='projects'>
            <h2>My current projects</h2>
            {photos.map((e, i) =>
                <img src={e.photo} alt={e.text} key={i} />
            )}
        </div>
        </>
    )
}

export { WebPage };