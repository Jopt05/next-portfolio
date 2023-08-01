import React, {useState, useEffect, useContext} from 'react';
import styles from './Form.module.css';
import { createdContext } from '../../../../hoc/createContext';
import { useRouter } from 'next/router';

export const Form = ({
    title,
    mainState,
    element,
    schema
}) => {

    const router = useRouter();

    const { technologies, setIsCreating, setIsEditing } = useContext(createdContext);

    const [information, setInformation] = useState({});
    const [errors, setErrors] = useState([])
    const [isCompleted, setIsCompleted] = useState(false);

    function handleChange(e) {
        if( e.target.type == 'checkbox' ) {
            setInformation({
                ...information,
                [e.target.name]: e.target.checked
            })    
            return
        }

        setInformation({
            ...information,
            [e.target.name]: e.target.value
        })
    };

    function handleCancel(e) {

        setInformation({});
        setIsCreating(false);
        setIsEditing(false);
        setErrors([]);

    };

    function handleAction(e) {
        const first_key = Object.keys(schema)[0];
        let data = information;
        if( data?.project_tecnologies ) {
            data.project_tecnologies = data.project_tecnologies.map((element) => element._id);
        }
        const categorie = {
            "project_name": "proyectos",
            "service_name": "servicios",
            "tech_name": "tecnologias"
        };
        const id = data._id;
        let endpoint = title == "Editar" ? `/api/${categorie[first_key]}/${id}` : `/api/${categorie[first_key]}`

        console.log({data})
        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
                method: title == "Editar" ? 'PUT' : 'POST',
                body: JSON.stringify(
                    data
                ),
                headers: { "Content-Type": "application/json" },
            }
        ).then(response => response.json())
        .then(response => {

            if( response.errors ) {
                setErrors(response.errors.map(element => element.msg));
            };

            console.log(response);
            setIsCompleted(true);

            setTimeout(() => {
                setIsCompleted(false);
                setInformation({});
                setIsCreating(false);
                setIsEditing(false);
                setErrors([]);
            }, 1500);
        })
        .catch(err => console.log(err));
    };

    function handleSelect(e) {
        let actualOptions = [];
        if ( information.project_tecnologies != null ) {
            actualOptions = information.project_tecnologies;
        }
        if ( actualOptions.some(element => element.tech_name == e.tech_name) ) {
            actualOptions = actualOptions.filter(el => el.tech_name != e.tech_name);
        } else {
            actualOptions.push(e);
        }

        setInformation({
            ...information,
            project_tecnologies: actualOptions
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if ( token == null ) router.push("/login");

        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/usuarios/auth`,{
                method: "POST",
                body: JSON.stringify({
                    "token": token
                }),
                headers: { "Content-Type": "application/json" },
            }
        ).then(response => response.json())
        .then(response => {
            console.log(response)
            if(response.msg && response.msg.includes("correctamente")) {
                console.log("Logeado");
            } else {
                router.push("/administration/login");
            }
        })
    }, [])

    useEffect(() => {
        if ( element == {} & schema == {} ) return;

        if( element == {} ) {
            setInformation(
                schema
            );
            return;
        }

        setInformation(
            element
        );
    }, [schema])

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
                                    (schema[key].tipo == "array") && 
                                    <select 
                                        name={key} 
                                        multiple
                                    >
                                        {
                                            technologies.map(element, index => (
                                                <option
                                                    className={
                                                        `
                                                        ${styles.container__body_form_option} ${(information.project_tecnologies != null && information.project_tecnologies
                                                        .some((tech_el) => tech_el.tech_name == element.tech_name)) && styles.container__body_form_option_selected}
                                                        `}
                                                    value={element._id}
                                                    onClick={() => handleSelect(element)}
                                                    key={index}
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
            <div className={styles.container__errors}>
                    {
                        errors.length > 0 
                        && errors.map(element, index => <p key={index} className={styles.container__errors_error}>{element}</p>)
                    }{
                        isCompleted && <p className={styles.container__completed}>Proceso completado!</p>
                    }
            </div>
            {
                mainState == true && 
                <div className={styles.container__actions}>
                        <button
                            className={styles.container__actions_second}
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                        <button
                            className={styles.container__actions_button}
                            onClick={handleAction}
                        >   
                            { title == "Editar" ? "Actualizar" : "Crear"}
                        </button>
                </div>
            }
        </div>
    )
}