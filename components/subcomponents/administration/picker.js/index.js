import React, {useContext} from 'react';
import styles from './Picker.module.css'
import { createdContext } from '../../../../hoc/createContext';

export const Picker = ({data, name, title}) => {

    const { setIsEditing, setIsCreating, setWorkingElement, setSchema } = useContext(createdContext);

    function handleEdit(element, schema) {
        setIsEditing(true);
        setIsCreating(false);
        setSchema(schema);
        setWorkingElement(element);
    }

    function handleCreate(schema) {
        setIsCreating(true);
        setIsEditing(false);
        setWorkingElement({});
        setSchema(schema);
    }

    const schema = {
        "project_name": {
            "project_name": {
                "label": "Nombre del Proyecto:",
                "tipo": "text"
            },
            "project_description": {
                "label": "Descripción del proyecto:",
                "tipo": "text"
            },
            "project_tecnologies": {
                "label": "Tecnologías usadas:",
                "tipo": "array",
                "extras": [
                    "tecnologia"
                ]
            },
            "project_topic": {
                "label": "Tema del proyecto:",
                "tipo": "text",
                "extras": [
                    "int"
                ]
            },
            "project_url": {
                "label": "Url del proyecto:",
                "tipo": "text"
            },
            "project_state": {
                "label": "Está activo:",
                "tipo": "checkbox"
            },
        },
        "service_name": {
            "service_name": {
                "label": "Nombre del servicio:",
                "tipo": "text"
            },
            "service_description": {
                "label": "Descripción del servicio:",
                "tipo": "text"
            },
            "service_topic": {
                "label": "Tema del servicio",
                "tipo": "text",
                "extras": [
                    "int"
                ]
            },
            "service_image": {
                "label": "Imagen:",
                "tipo": "text",
                "extras": [
                    "imagen"
                ]
            },
            "service_state": {
                "label": "Está activo:",
                "tipo": "checkbox"
            }
        },
        "tech_name": {
            "tech_name": {
                "label": "Nombre de la tecnología (Boxicons):",
                "tipo": "text",
                "extras": [
                    "icono"
                ]
            },
            "state": {
                "label": "Está activo:",
                "tipo": "checkbox"
            }
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>
                {name}
            </p>
            <div className={styles.container__menu}>
                <div className={`${styles.container__menu_loader} ${data.length > 0 && styles.container__menu_loader_deactivated}`}>
                    <img src='/images/imgs/loader.svg' />
                </div>
                {
                    data.map((element, index) => (
                            <div key={index} className={styles.container__menu_item}>
                                <p 
                                    className={styles.container__menu_title}
                                    onClick={() => handleEdit(element, schema[title])}
                                >
                                    {element[title]}
                                </p>
                            </div>
                        )
                    )
                }
            </div>
            <div className={styles.container__cta}>
                <button
                    className={styles.container__cta_button}
                    onClick={() => handleCreate(schema[title])}
                >
                    Nuevo
                </button>
            </div>
        </div>
    )
}