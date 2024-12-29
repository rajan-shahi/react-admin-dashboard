import { NavLink } from 'react-router-dom';

import { MenuItem } from 'types';
import { useGlobalProvider } from 'hooks';
import { cn } from 'helpers';

export const Menu = ({ title, items }: Props) => {
  const { isDarkTheme } = useGlobalProvider();

  return (
    <div className="px-3">
      <div
        className={cn('border-y border-secondary py-1.5 px-2.5', {
          'border-dark': isDarkTheme,
        })}
      >
        <p className="text-primary text-xs uppercase">{title}</p>
      </div>
      <ul
        className={cn('divide-y divide-secondary', {
          'divide-dark': isDarkTheme,
        })}
      >
        {items.map(({ label, path, icon }) => {
          return (
            <li key={label}>
              <NavLink
                to={path}
                className={cn(
                  'flex  items-center gap-2 py-4 px-2.5 hover:text-primary transition-colors',
                  { 'text-secondary': isDarkTheme }
                )}
              >
                <div className="w-4 h-4">{icon}</div>
                <p className="uppercase text-[13px]">{label}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type Props = {
  title: string;
  items: MenuItem[];
};
