import React, {useContext} from 'react';
import styles from './Forms.module.css'
import { Form } from '../../subcomponents/administration/form';
import { createdContext } from '../../../hoc/createContext';

export const Forms = () => {

    const { isEditing, isCreating, workingElement, schema } = useContext(createdContext);

    return (
        <div className={styles.container}>
            <Form 
                title={'Editar'}
                mainState={isEditing}
                element={workingElement}
                schema={schema}
            />
            <Form
                title={'Crear'}
                mainState={isCreating}
                element={workingElement}
                schema={schema}
            />
        </div>
    )
}