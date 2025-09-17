import {ReactNode} from 'react';

export const Card = ({children}: {children?: ReactNode}) => {
  return (
    <div className="border border-1 p-8 rounded-xl space-y-4">{children}</div>
  );
};
