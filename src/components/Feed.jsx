import Post from './Post'
import Search from './Search'
import { useAuthHeader } from 'react-auth-kit'
import { useEffect, useState } from 'react'

const Feed = () => {

    const [data, setData] = useState([])

    const authHeader = useAuthHeader()

    const getFeed = async () => {

        try {
            const response = await fetch('http://192.168.64.115:8000/api/feed', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })

            const parseRes = await response.json()
            setData(parseRes.data)

        } catch (err) {

        }

    }

    useEffect(() => {
        getFeed()
    }, [])


    return (
        <div className='py-8 gap-4 w-full h-full overflow-y-scroll flex flex-col items-center '>
            <Search />
            {data.map((post) => {
                return <Post
                    name={post.user.first_name.concat(' ', post.user.last_name)}
                    caption={post.caption}
                    habit={post.habit.name} />
            })
            }
            {/* <Post name='Janez primer' caption='Lorem ipsum dolor sit amet' habit='Teeth flossing' /> */}
        </div>
    )
}

export default Feed