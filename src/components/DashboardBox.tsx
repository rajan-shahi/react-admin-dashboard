import { ReactNode } from 'react';

import { cn } from 'helpers';
import { useGlobalProvider } from 'hooks';

export const DashboardBox = ({ title, children }: Props) => {
  const { isDarkTheme } = useGlobalProvider();

  return (
    <div
      className={cn(
        'bg-white p-4 rounded-[20px] flex flex-col h-full overflow-hidden',
        { 'bg-black text-secondary': isDarkTheme }
      )}
    >
      <h2 className="font-inika uppercase font-bold truncate">{title}</h2>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

type Props = {
  title: string;
  children: ReactNode;
};
