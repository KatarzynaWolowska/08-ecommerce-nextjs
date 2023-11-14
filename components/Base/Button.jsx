import styles from '../../styles/button.module.scss'

const Button = ({ children, variant, onClick, ...props }) => {
    return (
        <button className={styles[variant]} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button
