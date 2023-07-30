import React, { useEffect, useRef } from 'react'
import styles from './Form.module.css'

export const Form = () => {

    return (
        <div className={styles.container}>
            <form className={styles.container__form}>
                <p className={styles.container__form_title}>Ingresa los datos</p>
                <div className={styles.container__form_field}>
                    <p className={styles.container__form_label}>
                        Usuario
                    </p>
                    <input className={styles.container__form_input} type='email' />
                </div>
                <div className={styles.container__form_field}>
                    <p className={styles.container__form_label}>
                        Contraseña
                    </p>
                    <input className={styles.container__form_input} type='password' />
                </div>
            </form>
        </div>
    )
}