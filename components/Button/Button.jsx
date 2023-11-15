import styles from './Button.module.scss'

const Button = ({ children, variant = 'contained', onClick, ...props }) => {
    return (
        <button className={styles[variant]} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button
