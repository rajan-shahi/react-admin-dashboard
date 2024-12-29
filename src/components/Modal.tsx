import { ReactNode, useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { useGlobalProvider } from 'hooks';
import { cn } from 'helpers';

export const Modal = ({ onClose, children }: Props) => {
  const { isDarkTheme } = useGlobalProvider();

  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-dark/75 flex items-center justify-center z-50 min-h-screen h-auto overflow-y-auto">
      <div className="max-h-[100%-32px] overflow-y-auto p-4 w-full">
        <div
          className={cn(
            'bg-white p-6 rounded-[10px] relative max-w-[500px] w-full mx-auto',
            { 'bg-dark': isDarkTheme }
          )}
        >
          <button
            type="button"
            className="absolute flex items-center justify-center w-8 h-8 -top-4 -right-4 bg-primary text-white rounded-full"
            onClick={onClose}
          >
            <HiOutlineX />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

type Props = {
  onClose: () => void;
  children: ReactNode;
};
