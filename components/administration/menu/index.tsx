import React from 'react';
import styles from './Menu.module.css';
import { IProyect, IService, ITech } from '../../../interfaces';
import { ItemSelector } from '../../subcomponents/administration/itemSelector';

interface ComponentProps {
    data: {
        services: IService[],
        projects: IProyect[],
        technologies: ITech[]
    }
}

export const Menu = ({ data }: ComponentProps) => {

    return (
        <div className={styles.body}>
            <ItemSelector 
                projects={data.projects}
                services={data.services}
                technologies={data.technologies}
            />
        </div>
    )
}