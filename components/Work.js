import React, { useEffect, useState } from 'react'
import ServicesBox from './subcomponents/ServicesBox';

export const Work = () => {

    function getStack(listOfTechs = []) {
        /*
        1 React
        2 Js
        3 HTML
        4 CSS
        5 Python
        :)
         */
        let techs = listOfTechs.map((item) => {
            switch (item) {
                case 1:
                    return 'react'
                
                case 2:
                    return 'javascript'
    
                case 3:
                    return 'html5'
                
                case 4:
                    return 'css3'

                case 5:
                    return 'python'

                case 6:
                    return 'nodejs'

                case 7:
                    return 'mongodb'

                case 8:
                    return 'django'
            
                default:
                    break;
            }
        })
        return techs
    }

    function getTopic(integer) {
        // 0 - Game - bxs-game
        // 1 - Code - bx-code-alt
        // 2 - Web - bx-desktop
        // 3 - API - bxs-cloud-download
        switch (integer) {
            case "0":
                return 'bxs-game'
            
            case "1":
                return 'bx-code-alt'

            case "2":
                return 'bx-desktop'
            
            case "3":
                return 'bxs-cloud-download'
        
            default:
                break;
        }
    }

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
