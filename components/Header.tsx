import type { NextPage } from 'next';
import Image from 'next/image';
import InstagramLogo from '../public/instagram_logo.png';
import InstaLogo from '../public/insta-logo.png';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

const Header: NextPage = () => {
  return (
    <div className='sticky top-0 z-50 border-b bg-white shadow-sm'>
      <div className='mx-5 flex max-w-6xl justify-between lg:mx-auto'>
        {/* Left */}
        <div className='relative hidden w-24 cursor-pointer lg:inline-grid'>
          <Image
            src={InstagramLogo}
            layout='fill'
            objectFit='contain'
            priority={true}
          />
        </div>

        <div className='relative w-10 flex-shrink-0 cursor-pointer lg:hidden'>
          <Image
            src={InstaLogo}
            layout='fill'
            objectFit='contain'
            priority={true}
          />
        </div>

        {/* Middle */}
        <div className='max-w-xs'>
          <div className='relative mt-1 rounded-md p-3'>
            <div className='pointer-events-none absolute inset-y-0 flex items-center pl-3'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              className='block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm'
              type='text'
              placeholder='Search'
            />
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 cursor-pointer md:hidden' />

          <div className='navBtn relative'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white'>
              3
            </div>
          </div>

          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img
            src='/profile.jpg'
            alt='profile picture'
            className='h-10 w-10 cursor-pointer rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
