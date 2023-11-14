'use client'

import { useState } from 'react'
import IconBasket from '../Icons/IconBasket'

const ButtonBasket = () => {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <button
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <IconBasket isHover={isHover} />
        </button>
    )
}

export default ButtonBasket
