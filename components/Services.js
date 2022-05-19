import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

export const Services = () => {

    const [state, setState] = useState( { nameClass: 'none' } )

    const [isLoading, setIsLoading] = useState(true);

    const [services, setServices] = useState([]);

    useEffect(() => {
        let url = process.env.NEXT_PUBLIC_API_URL;

        fetch(`${url}/api/services/`)
            .then((response) => response.json())
            .then((response) => {
                if (response.services) {
                    setServices(response.services);
                    setIsLoading(false);
                    return;
                } 
                setServices([]);
            })
            .catch((err) => console.log(err))
    }, [])

    const handleChange = (isVisible) => {
        isVisible ? setState({ nameClass: 'animate__animated animate__bounceInLeft' }) : console.log("")
    }

    return (
        <div className="services">
            <VisibilitySensor onChange={handleChange} >
            <p className="subtitle marker">SERVICES</p>
            </VisibilitySensor>
            {   
                isLoading && (
                    <img className='loader' src="/images/imgs/loader.svg">
                    </img>
                )
            }
            {
                services.length > 0 && services.map((ITEM, INDEX) => (
                    <div className={ `services__box ${INDEX % 2 == 0 ? 'margin1' : 'margin3'} container ` + state.nameClass }>
                        <div className="services__box-1">
                            <i className={`icon bx ${ITEM.service_topic == 0 ? 'bx-devices' : 'bx-code-alt'}`}></i>
                            <p className="subtitle">{ ITEM.service_name }</p>
                            <p className="plainText">{ ITEM.service_description }</p>
                        </div>
                        <img className="imgS" src={ ITEM.service_image } alt="Frontend development" />
                    </div>
                ))
            }
        </div>
    )
}
