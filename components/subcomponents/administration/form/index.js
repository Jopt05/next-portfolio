import React, {useState, useEffect} from 'react';
import styles from './Form.module.css'

export const Form = ({
    title,
    mainState,
    element,
    schema
}) => {

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
                        
                    }
                </div>
            </div>
        </div>
    )
}