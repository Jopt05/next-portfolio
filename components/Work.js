import React, { useEffect, useState } from 'react'
import { getTopic } from '../utilities/functions';
import { getStack } from '../utilities/getStack';
import ServicesBox from './subcomponents/ServicesBox';

export const Work = () => {

    const [work, setWork] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let url = process.env.NEXT_PUBLIC_API_URL;

        fetch(`${url}/api/projects/`)
            .then((response) => response.json())
            .then((response) => {

                if(response.projects) {
                    setWork(response.projects)
                    console.log(response)
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
                    work.length > 0 && work.map((ITEM, INDEX) => (
                        <ServicesBox  
                            key={INDEX}
                            icon={getTopic(ITEM.project_topic)} 
                            subtitle={ITEM.project_name} 
                            plainText={ITEM.project_description} 
                            technologies={getStack(ITEM.project_technologies)} 
                            url={ITEM.project_url} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
