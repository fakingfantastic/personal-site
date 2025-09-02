import {ReactNode} from 'react';
import {
  Cantata_One,
  DM_Serif_Display,
  DM_Serif_Text,
  PT_Serif_Caption,
} from 'next/font/google';

const font = DM_Serif_Display({weight: '400', subsets: ['latin']});
export const BigTitle = ({children}: {children: ReactNode}) => {
  return (
    <h1
      className={[
        font.className,
        'text-5xl/[1.15]',
        '2xl:text-6xl/[1.15]',
      ].join(' ')}>
      {children}
    </h1>
  );
};
