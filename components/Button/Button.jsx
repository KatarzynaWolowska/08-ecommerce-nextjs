import styles from './Button.module.scss'
import BUTTON_VARIANTS from '@/constants/ButtonVariant'
import Link from 'next/link'

const Button = ({
    children,
    variant = BUTTON_VARIANTS.primary,
    onClick,
    ...props
}) => {
    return (
        <>
            {props.href ? (
                <Link className={styles[variant]} href={props.href}>
                    {children}
                </Link>
            ) : (
                <button
                    className={styles[variant]}
                    onClick={onClick}
                    {...props}>
                    {children}
                </button>
            )}
        </>
    )
}

export default Button
