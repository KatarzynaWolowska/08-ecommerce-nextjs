import styles from './Categories.module.scss'
import CategoryLink from './CategoryLink'

import Headphones from '../../public/category-headphones.png'
import Speakers from '../../public/category-speakers.png'
import Earphones from '../../public/category-earphones.png'

const CategoryList = () => {
    const categories = [
        { title: 'Headphones', href: 'headphones', image: Headphones },
        { title: 'Speakers', href: 'speakers', image: Speakers },
        { title: 'Earphones', href: 'earphones', image: Earphones }
    ]

    return (
        <ul className={styles.categoryList}>
            {categories.map((category, i) => (
                <li>
                    <CategoryLink
                        title={category.title}
                        href={category.href}
                        image={category.image}
                    />
                </li>
            ))}
        </ul>
    )
}

export default CategoryList
