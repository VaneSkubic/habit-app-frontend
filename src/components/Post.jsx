import profile from '../assets/profile.jpg'
import random from '../assets/random.jpg'

const Post = ({ name, caption, habit, image }) => {
    return (
        <div className="w-2/3 flex gap-8 flex-col p-8 rounded-lg shadow-lg h-fit">
            <div className="flex flex-row items-center">
                <img className='h-16 pr-4' src={profile} alt="" />
                <h3>{name}</h3>
            </div>
            <h3>{caption}</h3>
            <div className='bg-neutral-200 w-fit p-2 rounded-md'>
                {habit}
            </div>
            <div>
                <img className='rounded-md' src={random} alt="" />
            </div>
        </div>
    )
}

export default Post