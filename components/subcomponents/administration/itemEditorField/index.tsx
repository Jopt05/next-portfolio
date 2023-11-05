import React, {useState, useEffect, useContext} from 'react';
import styles from './itemEditorField.module.css';

interface IComponentProps {
    name: string;
}

export const ItemEditorField = (props: IComponentProps) => {

    function buildFieldName(key: string) {
        return key.split("_").join(" ");
    }

    return (
        <div className={styles.container_body_item}>
            <label className={styles.container_body_item_title}>
                { buildFieldName(props.name) }
            </label>
        </div>
    )
}