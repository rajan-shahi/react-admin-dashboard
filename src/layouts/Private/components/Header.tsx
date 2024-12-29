import { useState } from 'react';
import {
  HiOutlineSearch,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineMenu,
  HiOutlineX,
} from 'react-icons/hi';

import { useGlobalProvider } from 'hooks';
import { cn } from 'helpers';
import { Notifications, ProfileButton } from './components';

export const Header = () => {
  const { isDarkTheme, onThemeToggle, onMenuOpen } = useGlobalProvider();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex items-center gap-5 sm:gap-9 px-4 sm:px-8 py-4">
      <button
        className={cn('md:hidden', { 'text-secondary': isDarkTheme })}
        type="button"
        onClick={onMenuOpen}
      >
        <HiOutlineMenu />
      </button>
      <button
        className={cn('md:hidden', { 'text-secondary': isDarkTheme })}
        type="button"
        onClick={() => setShowSearch(true)}
      >
        <HiOutlineSearch />
      </button>
      <div
        className={cn(
          'flex-1 md:max-w-[700px] hidden md:block absolute md:relative top-0 left-0 w-full p-4 sm:px-8 md:p-0',
          { 'text-secondary': isDarkTheme, block: showSearch }
        )}
      >
        <input
          type="text"
          className={cn(
            'bg-white w-full rounded-[10px] pl-4 pr-12 md:pr-7 py-2 outline-0 border border-transparent focus:border-primary transition-colors',
            { 'bg-black focus:border-white': isDarkTheme }
          )}
        />
        <button
          className="absolute top-1/2 right-11 sm:right-16 md:right-2.5 -translate-y-1/2"
          type="button"
        >
          <HiOutlineSearch />
        </button>
        <button
          className="absolute top-1/2 right-6 sm:right-11 md:right-2.5 -translate-y-1/2 md:hidden"
          type="button"
          onClick={() => setShowSearch(false)}
        >
          <HiOutlineX />
        </button>
      </div>
      <div
        className={cn('flex items-center gap-2.5 sm:gap-4 text-xl ml-auto', {
          'text-secondary': isDarkTheme,
        })}
      >
        <button type="button" onClick={onThemeToggle}>
          {isDarkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
        </button>
        <Notifications />
      </div>
      <ProfileButton />
    </header>
  );
};
