import React, {useState, useEffect, useContext} from 'react';
import styles from './itemEditor.module.css';
import { createdContext } from '../../../../hoc/createContext';
import { ICreateContext, ISchema, IWorkingElement } from '../../../../interfaces';
import { ItemEditorField } from '../itemEditorField';

const valuesToHide = ["_id", "__v"]

export const ItemEditor = () => {

    const { technologies, isCreating, isEditing, workingElement } = useContext(createdContext) as ICreateContext;

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>
                Editor
            </p>
            <div className={styles.container_body}>
                {
                    workingElement != null && Object.entries(workingElement).map((element: [string, any]) => (
                        !valuesToHide.includes(element[0]) && (
                            <ItemEditorField name={element[0]} />
                        )
                    ))
                }
            </div>
        </div>
    )
}