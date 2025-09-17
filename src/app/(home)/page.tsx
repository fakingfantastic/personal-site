import {ArticleTeaser} from './components/ArticleTeaser';
import {Title} from '../../components/Title';
import {MainGreeting} from './components/MainGreeting';
import {Card} from '@/components/Card';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="my-4 space-y-16">
        <MainGreeting />
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-3">
              <Card>
                <div className="flex items-end">
                  <div className="w-20 h-20 rounded-t-full rounded-br-full bg-cyan-600"></div>
                  <Title as="h2">A little bit about me</Title>
                </div>
                <p>
                  I live in northern New Jersey with my wife and our two boys.
                  My passion for technology started early: one of my first
                  coding projects was building a social studies quiz in BASIC.
                  Along the way, I also pursued my love of music, playing in
                  bands, studying audio engineering, and even running a small
                  side hustle designing themed MySpace pages for friends&apos;
                  bands. Over time, my focus turned fully toward software. I
                  went on to earn a master&apos;s degree in computer science and
                  have since had the privilege of working with leading software
                  companies, digital agencies, and running my own consultancy.
                </p>
              </Card>
            </div>
            <div className="col-span-2">
              <ArticleTeaser />
            </div>
          </div>
        </div>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="text-center text-6xl font-extrabold">
              How can I help you?
            </div>
            <h2 className="text-4xl text-slate-700">
              I partner with organizations of all types to help them achieve
              their goals
            </h2>
          </div>
          <div className="container mx-auto">
            <div className="md:grid grid-cols-2 xl:grid-cols-4 space-y-8 md:space-y-0 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg space-y-4">
                <div className="text-center text-2xl">Businesses</div>
                <p>
                  Many businesses do not employee a technology staff that can
                  develop software solutions, some rely on an external team that
                  requires the right management and precise articulation of
                  goals, while others need help orchestrating their in-house
                  tech department to deliver on their goals.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg space-y-4">
                <div className="text-center text-2xl">Agencies</div>
                <p>
                  Very often, agencies rely on finding the right technology
                  partners to help execute their client&apos;s goals. My role
                  has historically been to be the one to fulfill the development
                  needs, or to assist with the identification and/or management
                  of the best team for the project.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg space-y-4">
                <div className="text-center text-2xl">Tech Departments</div>
                <p>Tech teams are beautiful, intricate, organic lifeforms.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg space-y-4">
                <div className="text-center text-2xl">Non-Profits</div>
                <p>
                  I have a passion for working for non-profit and social justice
                  organizations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
