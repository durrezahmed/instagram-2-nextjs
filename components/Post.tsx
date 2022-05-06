import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({
  id,
  username,
  userImg,
  img,
  caption,
}: {
  id: any;
  username: any;
  userImg: any;
  img: any;
  caption: any;
}) {
  return (
    <div className='my-7 rounded-sm border bg-white'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img
          src={userImg}
          className='mr-3 h-12 w-12 rounded-full border object-contain p-1'
          alt=''
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      {/* Image */}
      <img src={img} className='w-full object-cover' alt='' />

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4 '>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn' />
        </div>

        <BookmarkIcon className='btn' />
      </div>

      {/* Captions */}
      <p className='truncate p-5'>
        <span className='mr-1 font-bold'>{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
    </div>
  );
}

export default Post;
