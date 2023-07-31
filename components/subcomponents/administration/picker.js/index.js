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
                "tipo": ""
            },
            "project_description": {
                "label": "Descripción del proyecto:",
                "tipo": ""
            },
            "project_tecnologies": {
                "label": "Tecnologías usadas:",
                "tipo": [],
                "extras": [
                    "tecnologia"
                ]
            },
            "project_topic": {
                "label": "Tema del proyecto:",
                "tipo": 1,
                
            },
            "project_url": {
                "label": "Url del proyecto:",
                "tipo": ""
            },
            "project_state": {
                "label": "Está activo:",
                "tipo": true
            },
        },
        "service_name": {
            "service_name": {
                "label": "Nombre del servicio:",
                "tipo": ""
            },
            "service_description": {
                "label": "Descripción del servicio:",
                "tipo": ""
            },
            "service_topic": {
                "label": "Tema del servicio",
                "tipo": ""
            },
            "service_image": {
                "label": "Imagen:",
                "tipo": "",
                "extras": [
                    "imagen"
                ]
            },
            "service_state": {
                "label": "Está activo:",
                "tipo": true
            }
        },
        "tech_name": {
            "tech_name": {
                "label": "Nombre de la tecnología (Boxicons):",
                "tipo": "",
                "extras": [
                    "icono"
                ]
            },
            "tech_state": {
                "label": "Está activo:",
                "tipo": true
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
                    data.map((element) => (
                            <div className={styles.container__menu_item}>
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