import React from 'react';
import styles from './Header.module.css';
import { Metric } from '../../subcomponents/administration/metric';

export const Header = ({
    data
}) => {
    return (
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
    )
}