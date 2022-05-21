import React from 'react'

const ServicesBox = ({ icon, subtitle, plainText, technologies, url }) => {
    return (
        <div className="container">
            <i className={`icon bx ${ icon }`}></i>
            <p className="subtitle">{ subtitle }</p>
            <p className="plainText">{ plainText }</p>
            <p className="work__technologies">Tools:</p>
            <div className="work__technologies-div">
                {
                    technologies.map((technologie, index) => 
                        <i key={index} className={`bx bxl-${technologie}`} ></i>
                    )
                }
            </div>
            <a target="_blank" rel="noreferrer" href={url}>
                <div className="link__container">
                    <p className="link__text">
                    GO TO
                    </p>
                    <i className='link__icon bx bxs-right-arrow-alt'></i>
                </div>
            </a>
        </div>
    )
}

export default ServicesBox
