import React, { useEffect, useState } from 'react'

import { IWork } from '../../interfaces';

import { getTopic } from '../../utilities/functions';
import ServicesBox from '../subcomponents/home/ServicesBox';

export const Work = () => {

    const [work, setWork] = useState<IWork[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let url = process.env.NEXT_PUBLIC_API_URL;

        fetch(`${url}/api/proyectos`)
            .then((response) => response.json())
            .then((response) => {

                if(response.projects) {
                    let projects = response.projects.filter((project: IWork) => project.project_state == true);
                    setWork(projects);
                    setIsLoading(false);
                    return;
                }

            })

            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="work margin">
            <p className="title section">Work</p>
            <div className="work__div">
                {   
                    isLoading && (
                        <img className='loader' src="/images/imgs/loader.svg" />
                    )
                }
                {
                     work.length > 0 && work.map((project: IWork, i: number) => (
                        <ServicesBox  
                            key={i}
                            icon={getTopic(project.project_topic)} 
                            subtitle={project.project_name} 
                            plainText={project.project_description} 
                            technologies={project.project_tecnologies.map((item)=>item.tech_name)} 
                            url={project.project_url} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
