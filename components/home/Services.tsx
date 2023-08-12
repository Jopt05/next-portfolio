import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import { IService } from '../../interfaces';

interface INameClass {
    nameClass: string;
}

export const Services = () => {
    // Coment

    const [state, setState] = useState<INameClass>( { nameClass: 'none' } );

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {
        let url = process.env.NEXT_PUBLIC_API_URL;

        fetch(`${url}/api/servicios`)
            .then((response) => response.json())
            .then((response) => {

                if (response.services) {
                    let services = response.services.filter((service: IService) => service.service_state == true);

                    setServices(services);
                    setIsLoading(false);
                    return;
                } 

                setServices([]);
            })
            
            .catch((err) => console.log(err))

    }, [])

    const handleChange = (isVisible: boolean) => {
        isVisible 
            ? setState({ nameClass: 'animate__animated animate__bounceInLeft' }) 
            : console.log("There was a problem in handleChange")
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
                services.length > 0 && services.map((service: IService, i: number) => (
                    <div key={i} className={ `services__box ${i % 2 == 0 ? 'margin1' : 'margin3'} container ` + state.nameClass }>
                        <div className="services__box-1">
                            <i className={`icon bx ${service.service_topic == 0 ? 'bx-devices' : 'bx-code-alt'}`}></i>
                            <p className="subtitle">{ service.service_name }</p>
                            <p className="plainText">{ service.service_description }</p>
                        </div>
                        <img className="imgS" src={ service.service_image } alt="Frontend development" />
                    </div>
                ))
            }
        </div>
    )
}
