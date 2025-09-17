import {ReactNode} from 'react';
import {DM_Serif_Display} from 'next/font/google';

const font = DM_Serif_Display({weight: ['400'], subsets: ['latin']});
export const BigTitle = ({children}: {children: ReactNode}) => {
  return (
    <h1
      className={[
        font.className,
        'text-4xl/[1.15]',
        'lg:text-5xl/[1.15]',
        '2xl:text-6xl/[1.15]',
      ].join(' ')}>
      {children}
    </h1>
  );
};
