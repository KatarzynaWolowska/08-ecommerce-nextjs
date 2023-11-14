import Image from 'next/image'
import Link from 'next/link'
import colors from '../../styles/colors.module.scss'
import audiophile from '../../public/audiophile.svg'
import ButtonBasket from './ButtonBasket'
import Wrapper from '../Base/Wrapper'

const Navbar = () => {
    return (
        <header
            style={{
                display: 'flex',
                height: '97px',
                background: colors.bgDark
            }}>
            <Wrapper
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Link href='/'>
                    <Image
                        src={audiophile}
                        alt='audiophile'
                        width={145}
                        height={25}
                        priority={true}
                    />
                </Link>

                <ButtonBasket />
            </Wrapper>
        </header>
    )
}

export default Navbar
