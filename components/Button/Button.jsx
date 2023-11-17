import styles from './Button.module.scss'
import BUTTON_VARIANTS from '@/constants/ButtonVariant'

const Button = ({
    children,
    variant = BUTTON_VARIANTS.primary,
    onClick,
    ...props
}) => {
    return (
        <button className={styles[variant]} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button
