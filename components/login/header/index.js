import React, { useEffect, useRef } from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header__title}>Login</h1>
        </div>
    )
}