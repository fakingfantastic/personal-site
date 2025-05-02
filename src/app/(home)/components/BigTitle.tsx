import {ReactNode} from 'react';
import {PT_Serif_Caption} from 'next/font/google';

const font = PT_Serif_Caption({weight: '400', subsets: ['latin']});
export const BigTitle = ({children}: {children: ReactNode}) => {
  return (
    <h1
      className={[font.className, 'sm:text-5xl', 'sm:leading-tight'].join(' ')}>
      {children}
    </h1>
  );
};
