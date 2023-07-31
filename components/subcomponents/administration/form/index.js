import React, {useState, useEffect, useContext} from 'react';
import styles from './Form.module.css';
import { createdContext } from '../../../../hoc/createContext';

export const Form = ({
    title,
    mainState,
    element,
    schema
}) => {

    const { technologies } = useContext(createdContext);

    const [information, setInformation] = useState({});

    function handleChange(e) {
        setInformation({
            ...information,
            [e.target.name]: e.target.value
        })
    };

    function handleSelect(e) {
        let options = e.target.options;
        for( const index in options ) {
            if( options[index].selected ) {
                setInformation({
                    ...information,
                    [information.project_tecnologies]: [
                        ...information.project_tecnologies,
                        options[i].value
                    ]
                })
            }
        }
    };

    useEffect(() => {
        if( element == {} ) {
            setInformation(
                schema
            );
            return;
        }

        setInformation(
            element
        );
    }, [schema, element])

    return (
        <div className={styles.container}>
            <div className={styles.container__titlec}>
                <p className={styles.container__titlec_title}>
                    {title}
                </p>
            </div>
            <div className={styles.container__body}>
                <p className={`${styles.container__body_placeholder} ${mainState && styles.container__body_placeholder_deactivated}`}>
                    Selecciona una accion para iniciar
                </p>
                <div className={styles.container__body_form}>
                    {
                        mainState == true && Object.keys(schema).map((key, index) => (
                            <div key={index} className={styles.container__body_form_element}>
                                <label className={styles.container__body_form_label}>
                                    {schema[key].label}
                                </label>

                                {
                                    (schema[key].tipo == "array" && information.project_tecnologies) && 
                                    <select 
                                        name={key} 
                                        onChange={handleSelect}
                                        multiple
                                    >
                                        { 
                                            technologies.map(element => (
                                                <option 
                                                    selected={
                                                        information.project_tecnologies.some(tech => tech.tech_name == element.tech_name)
                                                    } 
                                                    value={element._id}
                                                    >
                                                        {element.tech_name}
                                                    
                                                </option>
                                            ))
                                        }    
                                    </select>
                                }
                                
                                {
                                    schema[key].tipo != "array" && <input 
                                        className={styles.container__body_form_input}
                                        type={schema[key].tipo} 
                                        name={key}
                                        onChange={(e) => handleChange(e)}
                                        value={information[key]}
                                        checked={information[key]}
                                    />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}