import React, {useContext, useState} from 'react';
import styles from './itemSelector.module.css';
import { ICreateContext, IProyect, IService, ITech } from '../../../../interfaces';
import { createdContext } from '../../../../hoc/createContext';

interface IComponentProps {
    projects: IProyect[];
    services: IService[];
    technologies: ITech[];
}

type TSelectorValue = "projects" | "services" | "technologies";

function getItemProperty(item: IProyect | IService | ITech) {
    if( (item as IProyect).project_name ) return (item as IProyect).project_name;
    if( (item as IService).service_name ) return (item as IService).service_name;
    return (item as ITech).tech_name;
}

export const ItemSelector = (props: IComponentProps) => {

    const { setWorkingElement, setIsEditing, setIsCreating } = useContext(createdContext) as ICreateContext;

    const [selectorValue, setSelectorValue] = useState<TSelectorValue>("projects");

    function handleChange(e: any) {
        e.preventDefault();
        setSelectorValue(e.target.value);
    }

    function handleItemSelect(selectedItem: IProyect | IService | ITech) {
        setWorkingElement(selectedItem);
        setIsEditing(true);
        setIsCreating(false);
    }

    function handleCreate(e: any) {
        const itemExample = props[selectorValue][0];
        e.preventDefault();
        setIsEditing(false);
        setIsCreating(true);
        setWorkingElement(itemExample);
    }

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>
                Selecciona un item
            </p>
            <div className={styles.container_header}>
                <select className={styles.container_select} onChange={handleChange}>
                    <option value='projects'>Proyectos</option>
                    <option value='services'>Servicios</option>
                    <option value='technologies'>Tecnologias</option>
                </select>
                <button
                    className={styles.container_header_buton}
                    onClick={handleCreate}
                >
                    Crear
                </button>
            </div>
            <div className={styles.container_body}>
                {
                    props[selectorValue].map(item => (
                        <p 
                            className={styles.container_body_title}
                            onClick={() => handleItemSelect(item)}
                        >
                            {
                                getItemProperty(item)
                            }
                        </p>
                    ))
                }
            </div>
        </div>
    )
}