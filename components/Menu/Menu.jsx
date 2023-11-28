import styles from './Menu.module.scss'
import Link from 'next/link'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <Link href='/' className={styles.link}>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href='/speakers' className={styles.link}>
                        <p>Speakers</p>
                    </Link>
                </li>
                <li>
                    <Link href='/headphones' className={styles.link}>
                        <p>Headphones</p>
                    </Link>
                </li>
                <li>
                    <Link href='/earphones' className={styles.link}>
                        <p>Earphones</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
