import {ReactNode} from 'react';
import Image from 'next/image';
import headshotPic from '../../../../public/me-headshot.jpg';
import profilePic from '../../../../public/me.png';
import {BigTitle} from './BigTitle';

export const MainGreeting = ({children}: {children?: ReactNode}) => {
  return (
    <div className="bg-[linear-gradient(25deg,#ace0f9,#fff1eb)] pl-4 pr-4 pt-4 pb-6 md:pb-0 mt-8 md:mt-0 md:rounded-2xl">
      <div className="lg:flex justify-center gap-8 2xl:gap-12">
        <div className="lg:pl-8 xl:pl-32 xl:pr-12">
          <Image
            src={headshotPic}
            className="-mt-20 w-32 h-32 rounded-full lg:hidden mx-auto"
            alt="Picture of Frank Lakatos"
          />
          <Image
            src={profilePic}
            className="-mt-16 hidden lg:block"
            alt="Picture of Frank Lakatos"
          />
        </div>
        <div className="flex items-center gap-y-4">
          <div className="max-w-4xl space-y-8">
            <section>
              <div className="text-center lg:text-left">
                <BigTitle>
                  Helping Organizations Create{' '}
                  <em className="text-blue-600 not-italic">Exceptional</em> Web
                  & Mobile Solutions for Over 20 Years
                </BigTitle>
              </div>
            </section>
            <div className="space-y-2">
              <form className="flex md:inline-flex bg-white rounded">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="p-3 rounded-l w-full md:w-96"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-r min-w-36">
                  Let&apos;s talk shop
                </button>
              </form>
              <div className="text-black text-opacity-75">
                Say hi, hear some of my thoughts, and keep up with useful tech
                trends
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
