const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/speakers' onClick={toggle}>
                        <p>Speakers</p>
                    </Link>
                </li>
                <li>
                    <Link href='/headphones' onClick={toggle}>
                        <p>Headphones</p>
                    </Link>
                </li>
                <li>
                    <Link href='/earphones' onClick={toggle}>
                        <p>Earphones</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
