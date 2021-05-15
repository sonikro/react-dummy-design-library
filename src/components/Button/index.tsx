import React from "react";
import styles from '../../styles.module.css'

export interface ButtonProps {
    text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
    return <div className={styles.test}>
        <button>
            {text}
        </button>
    </div>
}