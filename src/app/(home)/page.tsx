import Image from 'next/image';
import profilePic from '../../../public/me.png';
import {BigTitle} from './components/BigTitle';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="container mx-auto my-4">
        <div className="bg-[linear-gradient(25deg,#ace0f9,#fff1eb)] pl-4 pt-4 pr-4 rounded-2xl">
          <div className="flex justify-center gap-8 2xl:gap-12">
            <div className="pl-8 xl:pl-32 xl:pr-12">
              <Image
                src={profilePic}
                className="-mt-16"
                alt="Picture of Frank Lakatos"
              />
            </div>
            <div className="flex items-center gap-y-4">
              <div className="max-w-4xl space-y-16">
                <section className="space-y-8">
                  <div>
                    <BigTitle>
                      Helping Businesses Create{' '}
                      <em className="text-blue-600 not-italic">Exceptional</em>{' '}
                      Web & Mobile Experiences for Over 20 Years
                    </BigTitle>
                  </div>
                </section>
                <div className="space-y-2">
                  <form className="inline-flex bg-white rounded">
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="p-3 rounded-l w-96"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-r">
                      Let's talk shop
                    </button>
                  </form>
                  <div className="text-black text-opacity-75">
                    Say hi, hear some of my thoughts, and keep up with useful
                    tech trends
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-24 space-y-8">
          <div className="text-center text-6xl font-extrabold">
            What Do I Do?
          </div>
          <h2 className="text-4xl text-center">
            I have been partnering with a wide range of businesses to allow
            their brand come to life
          </h2>
          <div className="md:grid grid-cols-3 gap-8">
            <div>Businesses</div>
            <div>Agencies</div>
            <div>Non-Profits</div>
          </div>
        </section>
      </div>
    </main>
  );
}
