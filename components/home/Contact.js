import React, { useEffect, useRef } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { useClass } from '../../hooks/useClass'
import { ContactForm } from '../subcomponents/home/ContactForm'

export const Contact = () => {

    const refForm = useRef(null)
    
    const [ Classes, setClasses, handleGoToForm ] = useClass(refForm);
    
    const { nameClass, formAnim } = Classes;

    useEffect(() => {
        if( formAnim.includes("form__box-back") ) {
            setTimeout(() => {
                setClasses( { ...Classes, formAnim: "" } )
            }, 600);
        }
    }, [formAnim])

    return (
        <VisibilitySensor partialVisibility onChange={ (isVisible) => isVisible ? setClasses( { ...Classes, nameClass: "animate__animated animate__bounceInLeft" } ) : console.log("")} >
        <div className="contact">
            <div className={ "services__box container margin2 " + nameClass }>
                <img className="contact__image" src="/images/imgs/item5.png" alt="user" />
                <div className="services__box-1">
                    <p className="title">Keep in touch</p>
                    <p className="plainText">Leave me a message and i&apos;ll contact as soon as posible</p>
                </div>
                <a className="goToForm" onClick={ handleGoToForm }>LET&apos;S CHAT</a>
            </div>
            <ContactForm refForm={ refForm } formAnim={ formAnim } Classes={ Classes } setClasses={ setClasses } />
            <div className="contact__social">
                <a target="_blank" rel="noreferrer" href="https://github.com/Jopt05"><i className='social bx bxl-github'></i></a>
            </div>
        </div>
        </VisibilitySensor>
    )
}
