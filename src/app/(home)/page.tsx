import {MainGreeting} from './components/MainGreeting';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="container mx-auto my-4">
        <MainGreeting />
        <section className="py-24 space-y-12">
          <div className="text-center space-y-4">
            <div className="text-center text-6xl font-extrabold">
              How can I help you?
            </div>
            <h2 className="text-4xl text-slate-700">
              I partner with organizations of all types to help them achieve
              their goals
            </h2>
          </div>
          <div className="md:grid grid-cols-2 xl:grid-cols-4 space-y-8 md:space-y-0 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg space-y-4">
              <div className="text-center text-2xl">Businesses</div>
              <p>
                Many businesses do not employee a technology staff that can
                develop software solutions, some rely on an external team that
                requires the right management and precise articulation of goals,
                while others need help orchestrating their in-house tech
                department to deliver on their goals.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg space-y-4">
              <div className="text-center text-2xl">Agencies</div>
              <p>
                Very often, agencies rely on finding the right technology
                partners to help execute their client&apos;s goals. My role has
                historically been to be the one to fulfill the development
                needs, or to assist with the identification and/or management of
                the best team for the project.
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
        </section>
      </div>
    </main>
  );
}
