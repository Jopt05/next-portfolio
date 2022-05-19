import React from 'react'
// import Document from '../assets/downloads/Curriculum EN.pdf'

export const Hero = () => {
    return (
        <div className="hero margin animate__animated animate__fadeIn">
            <div className="hero__text">
                <h1 className="title animate__animated animate__backInLeft">Jesús<br/>Puentes</h1>
                <p className="subtitle">FULLSTACK DEVELOPER AND MECHATRONICS ENGINEER</p>
                <p className="plainText">I&apos;m at your service in any coding and web development need.</p>
                {/* <a target="_blank" href={ Document } download>CV</a> */}
            </div>
            <img className="hero__image" src="images/imgs/item2.png" alt="main picture" />
        </div>
    )
}
