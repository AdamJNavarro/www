'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarRoutes } from '~/app/config/routes';
import { buildReadableTitle } from '~/utils';
import { useDisclosure } from '~/utils/Hooks';

function useActivePath(): (href: string) => boolean {
  const pathname = usePathname();
  const checkActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === '/' && pathname !== href) {
      return false;
    }
    return pathname.startsWith(href);
  };

  return checkActivePath;
}

function useActiveRouteLabel(): string {
  const pathname = usePathname();
  if (!pathname) return '';
  if (pathname === '/') return 'Adam Navarro';
  return buildReadableTitle(pathname?.substring(pathname.lastIndexOf('/') + 1));
}

const BurgerButton = ({ isOpen, onClick }: any) => (
  <button type="button" className="h-5 w-5 block desktop:hidden" onClick={onClick}>
    <div className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</div>
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-slate-600 dark:bg-white transition duration-300 ease-in-out ${
        isOpen ? 'rotate-45' : '-translate-y-1.5'
      }`}
    />
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-slate-600 dark:bg-white transition duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-slate-600 dark:bg-white transition duration-300 ease-in-out ${
        isOpen ? '-rotate-45' : 'translate-y-1.5'
      }`}
    />
  </button>
);

export default function SiteLayout({ children }: any) {
  const [menuOpened, { toggle: toggleMenu }] = useDisclosure();

  const headerTitle = useActiveRouteLabel();
  const checkActivePath = useActivePath();

  return (
    <main className="min-h-screen grid grid-rows-header">
      <div>
        <header className="bg-white border-b dark:border-slate-800 dark:bg-slate-950 flex w-full fixed z-[200] h-16">
          <div className="h-100 pl-4 pr-6 flex flex-1 flex-row items-center justify-between gap-4">
            <div className="flex flex-row  items-center justify-start gap-4">
              <p className="text-black dark:text-white font-bold text-lg block capitalize desktop:hidden">
                {headerTitle}
              </p>
              <p className="text-black dark:text-white font-bold text-lg hidden desktop:block">
                Adam Navarro
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <BurgerButton isOpen={menuOpened} onClick={toggleMenu} />
            </div>
          </div>
        </header>
      </div>
      <div className="grid desktop:grid-cols-sidebar">
        <div>
          <nav
            className={classNames({
              'flex flex-col py-4 px-2': true, // layout
              'bg-white border-r dark:border-slate-800 dark:bg-slate-950': true, // colors
              'top-16 l-0 z-[200] fixed': true, // positioning
              'h-[calc(100vh_-_96px)] w-full desktop:w-sidebar': true, // for height and width
              'transition-transform duration-300 ease-in-out desktop:-translate-x-0':
                true, //animations
              '-translate-x-full ': !menuOpened, //hide sidebar to the left when closed
            })}
          >
            <div className="flex-grow overflow-hidden relative">
              <div className="w-full h-full">
                <div className="mr-2 space-y-3">
                  {navbarRoutes.map((item) => {
                    const isActive = checkActivePath(item.href);
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          toggleMenu();
                        }}
                        className={classNames({
                          'relative flex items-center py-1 px-2 rounded-md font-medium text-md':
                            true,
                          'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white':
                            true,
                          'underline underline-offset-8 decoration-2 decoration-violet-500':
                            isActive,
                        })}
                      >
                        <span className="flex-1">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Probably want to set a max-width here to handle large monitor layouts */}
        <div className="flex overflow-y-auto flex-col">
          <div className="flex-auto flex flex-col pt-12 pb-16 px-shell desktop:pt-16 desktop:mx-24">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
