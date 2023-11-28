import colors from '../../styles/colors.module.scss'
import Logo from './Logo'
import Wrapper from '@/components/Wrapper/Wrapper'
import ButtonBasket from './ButtonBasket'

const Navbar = () => {
    return (
        <header
            style={{
                display: 'flex',
                height: '97px',
                background: colors.bgDark
            }}>
            <Wrapper>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Logo />
                    <ButtonBasket />
                </div>
            </Wrapper>
        </header>
    )
}

export default Navbar
