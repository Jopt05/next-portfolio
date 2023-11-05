import React, {useContext} from 'react';
import styles from './Forms.module.css'
import { Form } from '../../subcomponents/administration/form';
import { createdContext } from '../../../hoc/createContext';
import { ICreateContext } from '../../../interfaces';
import { ItemEditor } from '../../subcomponents/administration/itemEditor';

export const Forms = () => {

    return (
        <div className={styles.container}>
            <ItemEditor />
        </div>
    )
}