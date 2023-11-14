const Wrapper = ({ children, style }) => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '1100px',
                margin: 'auto',
                ...style
            }}>
            {children}
        </div>
    )
}

export default Wrapper
