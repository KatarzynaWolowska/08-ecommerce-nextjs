import Image from 'next/image'
import Link from 'next/link'
import styles from './Categories.module.scss'
import shadow from '../../public/category-shadow.png'
import Button from '../Button/Button'

const CategoryLink = ({ title, href, image }) => {
    return (
        <Link href={href}>
            <div className={styles.photoBox}>
                <Image src={shadow} className={styles.shadow} alt='' />
                <Image src={image} className={styles.photo} alt={title} />
            </div>
            <div className={styles.grayBox}>
                <p className='h6'>{title}</p>
                <Button variant='link' style={{ margin: 0 }}>
                    Shop
                </Button>
            </div>
        </Link>
    )
}

export default CategoryLink
