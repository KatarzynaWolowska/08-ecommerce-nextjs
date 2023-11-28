import BUTTON_VARIANTS from '@/constants/ButtonVariant'

import styles from './Button.module.scss'

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
