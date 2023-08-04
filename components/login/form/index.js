import React, { useEffect, useRef, useState } from 'react'
import styles from './Form.module.css'
import { useRouter } from 'next/router';

export const Form = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState([]);
    const [successfull, setSuccessfull] = useState(false);

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
                setIsLoading(false);

                if (response.token) {
                    setSuccessfull(true);
                    localStorage.setItem('token', response.token);
                    setTimeout(() => {
                        router.push('/administration');
                    }, 1500);
                    return
                }

                if (response.errors) {
                    setErrors(response.errors.map((element) => element.msg));
                    setSuccessfull(false);
                    return
                }

                if (response.msg) {
                    setErrors([
                        msg
                    ]);
                    setSuccessfull(false);
                }

                setErrors([]);
            })
            
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setErrors([
                    'Hubo un error al realizar la request'
                ])
            })
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
                    disabled={successfull}
                >
                    { successfull ? 'Cargado!' : 'Enviar' }
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
                    {
                        errors.map((error, index) => (
                            <p key={index} className={styles.errorsdiv__text}>
                                {error}
                            </p>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}