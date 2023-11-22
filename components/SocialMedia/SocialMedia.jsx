import styles from './SocialMedia.module.scss'
import IconFacebook from '../Icons/IconFacebook'
import IconTwitter from '../Icons/IconTwitter'
import IconInstagram from '../Icons/IconInstagram'

const SocialMedia = () => {
    return (
        <nav className={styles.socialmedia}>
            <ul>
                <li>
                    <IconFacebook />
                </li>
                <li>
                    <IconTwitter />
                </li>
                <li>
                    <IconInstagram />
                </li>
            </ul>
        </nav>
    )
}

export default SocialMedia
