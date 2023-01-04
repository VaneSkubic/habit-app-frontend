import { useAuthUser, useAuthHeader } from 'react-auth-kit'

const Post = ({ name, caption, habit, image, profile, id, onRemovePost }) => {

    const authHeader = useAuthHeader()

    const onDelete = async (postId) => {

        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL + '/posts/' + postId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `${authHeader()}`
                },
            })
            const parseRes = await response.json()

        } catch (err) {
            console.log(err.message)
        }

    }

    const authUser = useAuthUser();

    return (
        <div className="w-2/3 flex gap-8 flex-col p-8 rounded-lg shadow-lg h-fit">
            <div className="flex flex-row justify-between items-center">
                <div className="flex row items-center">
                    <img className="w-12 h-12 rounded-full mr-4" src={profile} alt="" />
                    <h3>{name}</h3>
                </div>
                {authUser().isAdmin === 1 &&
                    <button onClick={() => {
                        onDelete(id)
                        onRemovePost(id)
                    }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                }
            </div>
            <h3>{caption}</h3>
            <div className='bg-neutral-200 w-fit p-2 rounded-md'>
                {habit}
            </div>
            <div>
                <img className='rounded-md' src={image} alt="" />
            </div>
        </div>
    )
}

export default Post