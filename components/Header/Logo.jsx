import Image from 'next/image'
import Link from 'next/link'
import audiophile from '../../public/audiophile.svg'

const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src={audiophile}
                alt='Audiophile'
                width={145}
                height={25}
                priority={true}
            />
        </Link>
    )
}

export default Logo
