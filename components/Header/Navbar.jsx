import Image from 'next/image'
import audiophile from '../../public/audiophile.svg'
import ButtonBasket from './ButtonBasket'
import Wrapper from '../Base/Wrapper'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header
            style={{
                display: 'flex',
                height: '97px',
                background: '#141414'
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
