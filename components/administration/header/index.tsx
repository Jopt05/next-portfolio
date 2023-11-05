import React from 'react';
import styles from './Header.module.css';
import { Metric } from '../../subcomponents/administration/metric';
import { IProyect, IService, ITech } from '../../../interfaces';

interface ComponentProps {
    data: {
        services: IService[],
        projects: IProyect[],
        technologies: ITech[]
    }
}

export const Header = ({data}: ComponentProps) => {
    return (
        <>
            <div className={styles.header}>
                <h1>Admin Panel</h1>
            </div>
            <div className={styles.body}>
                <Metric 
                    data={data.projects.length}
                    name={'Proyects'}
                />
                <Metric 
                    data={data.services.length}
                    name={'Services'}
                />
                <Metric 
                    data={data.technologies.length}
                    name={'Technologies'}
                />
            </div>
        </>
    )
}