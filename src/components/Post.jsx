
const Post = ({ name, caption, habit, image, profile }) => {
    return (
        <div className="w-2/3 flex gap-8 flex-col p-8 rounded-lg shadow-lg h-fit">
            <div className="flex flex-row items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={profile} alt="" />
                <h3>{name}</h3>
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