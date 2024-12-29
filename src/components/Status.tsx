import { cn } from 'helpers';

export const Status = ({ label, type = 'default' }: Props) => {
  return (
    <div
      className={cn('text-xs font-bold', {
        'text-primary': type === 'default',
        'text-danger': type === 'danger',
        'text-success': type === 'success',
        'text-warning': type === 'warning',
      })}
    >
      {label}
    </div>
  );
};

export type StatusType = 'danger' | 'success' | 'warning' | 'default';

type Props = {
  label: string;
  type?: StatusType;
};
