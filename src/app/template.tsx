import {ReactNode} from 'react';

export default function Template({children}: {children: ReactNode}) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="inline-flex items-center space-x-2">
            <div className="relative font-bold w-6 h-6">
              <div className="leading-none absolute top-[2px] left-[4px]">
                F
              </div>
              <div className="leading-none absolute top-[10px] left-[14px]">
                L
              </div>
            </div>
            <div className="text-lg border-b-2 border-black border-solid inline-block">
              Frank Lakatos
            </div>
          </div>
          <div className="py-8">
            <nav>
              <ul className="flex items-center space-x-4">
                <li>
                  <a
                    href="https://www.tiktok.com/@fakingfantastic"
                    target="_blank"
                    className="opacity-50 hover:opacity-100">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M21 7v2a1 1 0 0 1-1 1 8 8 0 0 1-4-1.08v6.58a6.5 6.5 0 1 1-9.47-5.78 1 1 0 0 1 1.47.9v2.52a.92.92 0 0 1-.28.62 2.49 2.49 0 0 0 2 4.23A2.61 2.61 0 0 0 12 15.35V3a1 1 0 0 1 1-1h2.11a1 1 0 0 1 1 .83A4 4 0 0 0 20 6a1 1 0 0 1 1 1"
                        style={{fill: '#000'}}
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.x.com/fakingfantastic"
                    target="_blank"
                    className="opacity-50 hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 300 271">
                      <path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/franklakatos/"
                    target="_blank"
                    className="opacity-50 hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="-143 145 512 512">
                      <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256m159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8" />
                      <path d="M-8.5 348.4h49.9v159.7H-8.5zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7M177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
