import Image from 'next/image'
import Link from 'next/link'

import BUTTON_VARIANTS from '@/constants/ButtonVariant'

import shadow from '../../public/category-shadow.png'
import Button from '../Button/Button'
import styles from './Categories.module.scss'

const CategoryLink = ({ title, href, image }) => {
    return (
        <Link href={href}>
            <div className={styles.photoBox}>
                <Image src={image} className={styles.photo} alt={title} />
                <Image src={shadow} className={styles.shadow} alt='' />
            </div>
            <p className='h6'>{title}</p>
            <Button variant={BUTTON_VARIANTS.ghost} style={{ margin: 0 }}>
                Shop
            </Button>
        </Link>
    )
}

export default CategoryLink
