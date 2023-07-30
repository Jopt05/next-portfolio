import React, { useEffect, useRef, useState } from 'react'
import styles from './Form.module.css'

export const Form = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState([]);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("enviado")

        let url = process.env.NEXT_PUBLIC_API_URL;
        setIsLoading(true);

        fetch(
            `${url}/api/usuarios/login`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            },
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);

                if (response.token) {
                    console.log("Cargado")
                } else {
                    setErrors(response.errors.map((element) => element.msg));
                }
                setIsLoading(false);
            })
            
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.container}>
            <form 
                className={styles.container__form}
                onSubmit={handleSubmit}
            >
                <p className={styles.container__form_title}>Ingresa los datos</p>
                <div className={styles.container__form_field}>
                    <p className={styles.container__form_label}>
                        Usuario
                    </p>
                    <input 
                        name='user_name' 
                        className={styles.container__form_input} 
                        type='text' 
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.container__form_field}>
                    <p className={styles.container__form_label}>
                        Contraseña
                    </p>
                    <input 
                        name='password' 
                        className={styles.container__form_input} 
                        type='password' 
                        onChange={handleChange}
                    />
                </div>
                <button 
                    className={`${styles.container__form_button} ${isLoading && styles.container__form_button_deactivated}`}
                >
                    Enviar
                </button>
                <div className={styles.loaderdiv}>
                    <img 
                        className={`${styles.loaderdiv__svg} ${isLoading && styles.loaderdiv__svg_activated}`}
                        src='/images/imgs/loader.svg'
                    />
                </div>
                <div 
                    className={`${styles.errorsdiv} ${errors.length > 0 && styles.errorsdiv__activated}`}
                >
                    {<p className={styles.errorsdiv__text}>
                        Error de prueba
                    </p>}
                </div>
            </form>
        </div>
    )
}