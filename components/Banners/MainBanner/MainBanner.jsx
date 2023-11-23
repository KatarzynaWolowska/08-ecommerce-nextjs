import Image from 'next/image'
import Button from '@/components/Button/Button'
import styles from './MainBanner.module.scss'
import circle from './circleAnimation.module.scss'
import photo from '../../../public/banner-speaker-zx9.png'

const MainBanner = () => {
    return (
        <section className={styles.mainBanner}>
            <div className={circle.animation}>
                <div className={circle.animation1} />
                <div className={circle.animation2} />
                <div className={circle.animation3} />
            </div>
            <div className={styles.column}>
                <Image src={photo} className={styles.photo} alt='ZX9 speaker' />
                <h2 className='h1'>
                    ZX9
                    <br />
                    SPEAKER
                </h2>
                <p>
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </p>
                <Button variant='black' href='/'>
                    See product
                </Button>
            </div>
        </section>
    )
}

export default MainBanner
