import styles from './Cart.module.scss'

const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.row}>
                <p className={styles.title}>CART (3)</p>
                <a>Remove all</a>
            </div>
            <div className={styles.row}>
                <div className={styles.product}>
                    <div className={styles.name}>XX99 MK II</div>
                    <div className={styles.price}>$ 2,999</div>
                </div>
                <div className={styles.quantity}>
                    <input type='number' />
                </div>
            </div>

            <div className={styles.backdrop} />
        </div>
    )
}

export default Cart
