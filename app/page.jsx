import TopBanner from '@/components/Banners/TopBanner'
import CategoryList from '@/components/Categories/CategoryList'
import Wrapper from '@/components/Wrapper/Wrapper'

const Home = () => {
    return (
        <>
            <TopBanner />
            <Wrapper>
                <CategoryList />
            </Wrapper>
        </>
    )
}

export default Home
