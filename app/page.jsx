import Wrapper from '@/components/Wrapper/Wrapper'
import TopBanner from '@/components/Banners/TopBanner/TopBanner'
import CategoryList from '@/components/Categories/CategoryList'
import MainBanner from '@/components/Banners/MainBanner/MainBanner'

const Home = () => {
    return (
        <>
            <TopBanner />
            <Wrapper>
                <MainBanner />
                <CategoryList />
            </Wrapper>
        </>
    )
}

export default Home
