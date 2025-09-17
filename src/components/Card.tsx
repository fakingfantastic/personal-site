import clsx from 'clsx';
import {ReactNode} from 'react';

export const Card = ({
  children,
  borderless = false,
}: {
  children?: ReactNode;
  borderless?: boolean;
}) => {
  return (
    <div
      className={clsx(
        'p-8 rounded-xl space-y-4',
        !borderless && 'border border-1',
      )}>
      {children}
    </div>
  );
};
