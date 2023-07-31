import React from 'react';
import styles from './Menu.module.css'
import { Picker } from '../../subcomponents/administration/picker.js';

export const Menu = ({ data }) => {

    return (
        <div className={styles.body}>
            <Picker
                key={1} 
                data={data.projects}
                name={'Projects'}
                title={'project_name'}
            />
            <Picker
                key={2} 
                data={data.services}
                name={'Services'}
                title={'service_name'}
            />
            <Picker
                key={3} 
                data={data.technologies}
                name={'Technologies'}
                title={'tech_name'}
            />
        </div>
    )
}