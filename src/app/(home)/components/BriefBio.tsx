import {Title} from '@/components/Title';
import clsx from 'clsx';
import {DM_Serif_Display, PT_Serif} from 'next/font/google';
import {ReactNode} from 'react';
const font = PT_Serif({
  weight: '400',
  subsets: ['latin'],
});

export const BriefBio = ({children}: {children?: ReactNode}) => {
  return (
    <>
      <div className="flex items-end">
        <div className="w-20 h-20 rounded-t-full rounded-br-full bg-cyan-600"></div>
        <Title as="h2">A little bit about me</Title>
      </div>
      <p className={clsx(font.className, 'text-lg leading-loose')}>
        I live in northern New Jersey with my amazing wife and our two boys. My
        passion for technology started early: my first coding project I can
        remember was building a social studies quiz in BASIC. Along the way, I
        also pursued my love of music, playing in bands, studying audio
        engineering, and even running a small side hustle theming MySpace pages
        for friends&apos; bands. Over time, my focus turned fully toward
        software. I went on to earn a master&apos;s degree in computer science
        and have since had the privilege of working with leading software
        companies, digital agencies, and running my own consultancy.
      </p>
    </>
  );
};
