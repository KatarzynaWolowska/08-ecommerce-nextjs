import Wrapper from '@/components/Wrapper/Wrapper'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import SocialMedia from '../SocialMedia/SocialMedia'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Wrapper>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <Menu />
                </div>
                <p>
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We're a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we're
                    open 7 days a week.
                </p>
                <div className={styles.bottomSection}>
                    <p>Copyright 2021. All Rights Reserved</p>
                    <div className={styles.socialmedia}>
                        <SocialMedia />
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer
