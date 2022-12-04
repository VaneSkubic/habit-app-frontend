import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Feed from '../components/Feed'

const HomePage = () => {
    return (
        <div className='w-full h-full flex flex-row'>
            <LeftSidebar />
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default HomePage