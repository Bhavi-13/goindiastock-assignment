import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Card = ({ user }) => {
  return (
    <div className="bg-white shadow-md shadow-gray-400 rounded-lg p-4 mb-10">
        <div className="flex items-center justify-between">
            <div className='flex flex-row gap-4 items-center'>
                <img src={user.profilePic} alt="Profile Pic" className="w-10 h-10 rounded-full" />
                <h2 className="text-base font-semibold text-gray-500">{user.name}</h2>
                <button className="bg-blue-900 text-gray-300 rounded-full px-4 py-1 text-[8px] uppercase font-medium">{user.sector}</button>
            
            </div>
            <div>
                <span className='text-sm text-sky-500 font-semibold'>{user.time}</span>
            </div>
        </div>
         
        <div className='flex flex-col px-14 '>
            <p className="text-gray-500 font-semibold mb-2">{user.description}</p>
            <div className="flex flex-row items-center justify-between text-black text-xs font-semibold">
                <span><FavoriteBorderIcon/> {user.likes}</span>
                <span><RemoveRedEyeOutlinedIcon/> {user.views}</span>
                <span><ChatBubbleOutlineOutlinedIcon/> {user.comments} Comments</span>
                <span><ShareOutlinedIcon/> Share</span>
            </div>
        </div>        
    </div>
  
  );
};

export default Card;
