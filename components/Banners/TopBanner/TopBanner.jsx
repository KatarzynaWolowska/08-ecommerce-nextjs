import Button from '@/components/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'
import styles from './TopBanner.module.scss'

const TopBanner = () => {
    return (
        <section className={styles.topBanner}>
            <Wrapper>
                <div className={styles.column}>
                    <p className='overline'>New product</p>
                    <h1> XX99 Mark II Headphones</h1>
                    <p>
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>
                    <Button href='/'>See product</Button>
                </div>
            </Wrapper>
        </section>
    )
}

export default TopBanner
