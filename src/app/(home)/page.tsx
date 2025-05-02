import Image from 'next/image';
import profilePic from '../../../public/me.png';
import {BigTitle} from './components/BigTitle';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="container mx-auto my-16">
        <div className="bg-[linear-gradient(25deg,#ace0f9,#fff1eb)] pl-4 pt-4 pr-4 rounded-lg">
          <div className="flex justify-center">
            <div className="flex items-center gap-y-4">
              <div className="max-w-xl px-8 space-y-8">
                <div className="text-3xl">
                  <BigTitle>
                    Architecting Exceptional Web & Mobile Experiences For Over
                    20 Years
                  </BigTitle>
                </div>
                <div className="text-2xl font-bold border-t-2 border-blue-500 border-solid inline-block">
                  Frank Lakatos
                </div>
              </div>
              <div>
                <blockquote></blockquote>
              </div>
            </div>
            <Image
              src={profilePic}
              className="-mt-16"
              alt="Picture of Frank Lakatos"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
