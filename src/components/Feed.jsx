import Post from './Post'
import { useAuthHeader } from 'react-auth-kit'
import { useEffect, useState } from 'react'
import CreatePost from './CreatePost'

const Feed = () => {

    const [data, setData] = useState([])

    const authHeader = useAuthHeader()

    const getFeed = async () => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/feed', {
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

    const removePost = (id) => {
        setData(data.filter(post => post.id !== id))
    }


    return (
        <div className='py-8 gap-4 w-full h-full overflow-y-scroll flex flex-col items-center '>
            <CreatePost onMakePost={getFeed} />
            {data.map((post) => {
                return <Post
                    key={post.id}
                    id={post.id}
                    name={post.user.first_name.concat(' ', post.user.last_name)}
                    caption={post.caption}
                    habit={post.habit.name}
                    image={post.media?.media_url}
                    profile={post.user.media?.media_url}
                    onRemovePost={removePost}
                    userId={post.user.id}
                    habitId={post.habit.id}
                />
            })
            }
        </div>
    )
}

export default Feed