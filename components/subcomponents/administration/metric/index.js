import React from 'react';
import styles from './Metric.module.css';

export const Metric = ({data, name}) => {


    return (
        <div className={styles.metrics__container}>
            <div className={styles.metrics__container_toprow}>
                {
                    data == "0"
                    ? <img className={styles.metrics__container_loader} src='/images/imgs/loader.svg'/>
                    : <p className={styles.metrics__container_counter}>
                            {data}
                    </p>
                }
            </div>
            <div className={styles.metrics__container_bottomrow}>
                {name}
            </div>
        </div>
    )
}