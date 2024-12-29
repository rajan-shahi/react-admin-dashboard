import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineChartPie,
  HiOutlineCurrencyDollar,
  HiOutlineAnnotation,
  HiOutlineUserGroup,
  HiOutlineRefresh,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineX,
} from 'react-icons/hi';

import { MenuItem } from 'types';
import { useGlobalProvider } from 'hooks';
import { cn } from 'helpers';
import { Menu, Header } from './components';

const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/', icon: <HiOutlineHome /> },
  { label: 'Orders', path: '/', icon: <HiOutlineClipboardList /> },
  { label: 'Analytics', path: '/', icon: <HiOutlineChartPie /> },
  { label: 'My Wallet', path: '/', icon: <HiOutlineCurrencyDollar /> },
  { label: 'Reviews', path: '/', icon: <HiOutlineAnnotation /> },
  { label: 'Customers', path: '/', icon: <HiOutlineUserGroup /> },
  { label: 'History', path: '/', icon: <HiOutlineRefresh /> },
  { label: 'Settings', path: '/', icon: <HiOutlineCog /> },
];

const helpItems: MenuItem[] = [
  { label: 'Support', path: '/', icon: <HiOutlineQuestionMarkCircle /> },
];

export const PrivateLayout = ({
  children = <Outlet />,
}: {
  children?: JSX.Element;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { isMenuOpen, isDarkTheme, onMenuClose } = useGlobalProvider();

  return (
    <main
      className={cn(
        'min-h-screen font-imprima text-dark md:pl-[250px] transition-all bg-secondary',
        { 'bg-dark-400': isDarkTheme }
      )}
    >
      <div
        className={cn(
          'w-[250px] bg-white overflow-y-auto flex flex-col pb-6 h-full fixed top-0 -left-[250px] md:left-0 transition-all z-10',
          { 'left-0 shadow-md': isMenuOpen, 'bg-black': isDarkTheme }
        )}
        ref={menuRef}
      >
        <button
          onClick={onMenuClose}
          className={cn('absolute top-2.5 right-2.5 md:hidden', {
            'text-secondary': isDarkTheme,
          })}
        >
          <HiOutlineX className="w-5 h-5" />
        </button>
        <div className="px-3 py-5">
          <p className="font-inika text-primary text-3xl uppercase">My Admin</p>
        </div>
        <Menu items={menuItems} title="Menu" />
        <Menu items={helpItems} title="Help" />
        <div className="mt-auto px-6 pt-10">
          <div className="bg-primary rounded-[20px] p-[18px] font-inika text-white">
            <p className="font-bold uppercase text-xl mb-1.5 text-center">
              Help center
            </p>
            <p className="text-sm mb-5">
              Having trouble? Please contact us if you have any questions.
            </p>
            <button className="bg-dark rounded-[10px] py-3 px-4 text-center w-full uppercase text-lg hover:bg-dark/[0.9] transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="px-4 sm:px-8 py-4">{children}</div>
      </div>
    </main>
  );
};
