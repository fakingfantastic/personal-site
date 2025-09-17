import {DM_Serif_Display} from 'next/font/google';
import {ReactNode} from 'react';
const font = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
});

export const ArticleTeaser = ({children}: {children?: ReactNode}) => {
  return (
    <aside className="border border-1 p-8 rounded-xl space-y-4">
      <div>
        <div className="uppercase text-xs text-slate-700">
          <em className="not-italic font-semibold">Fantastic Thoughts</em>:
          Latest Writing
        </div>
        <div className="text-sm text-slate-500">
          Lessons and reflections, shared openly.
        </div>
      </div>
      <div className={[font.className, 'text-3xl'].join(' ')}>
        You are not your code.
      </div>
      <div>Continue Reading →</div>
    </aside>
  );
};
