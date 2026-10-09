import type {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'quiet';
};

export default function Button ({
    children, // conteudo que vemos entre tags (comprar, excluir, entrar)
    className = "",
    variant = "primary",
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            className ={`${styles.button} ${styles[variant]} ${className}`.trim()}
            type={type}
            {...props}
        >  
            {children}
        </button>
    );
}