'use client'

import { useState } from 'react'

import Wrapper from '@/components/Wrapper/Wrapper'

import Cart from '../Cart/Cart'
import colors from '../../styles/colors.module.scss'
import Logo from '../Logo/Logo'

import ButtonBasket from './ButtonBasket'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)

    const toggleCart = () => {
        setShowCart(!showCart)
    }
    return (
        <header
            style={{
                display: 'flex',
                height: '97px',
                background: colors.bgDark
            }}>
            <Wrapper>
                <div className={styles.container}>
                    <Logo />
                    <ButtonBasket onClick={toggleCart} />
                    {showCart && <Cart showCart={showCart} />}
                </div>
            </Wrapper>
        </header>
    )
}

export default Navbar
