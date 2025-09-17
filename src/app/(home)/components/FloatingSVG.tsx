import {ReactNode} from 'react';

export const FloatingSVG = ({children}: {children?: ReactNode}) => {
  return (
    <div className="grid">
      <div className="col-start-1 row-start-1 transform -translate-y-1 translate-x-[.125rem] origin-center">
        {children}
      </div>
      <div className="col-start-1 row-start-1 transform translate-y-[.375rem] -translate-x-1 -scale-80 blur-[1px] opacity-10 origin-center">
        {children}
      </div>
    </div>
  );
};
