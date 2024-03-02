'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twJoin } from 'tailwind-merge';
import { navbarRoutes } from '~/app/config/routes';
import { useDisclosure } from '~/utils';

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
  return pathname?.substring(pathname.lastIndexOf('/') + 1);
}

const BurgerButton = ({ customClass, isOpen, onClick }: any) => (
  <button type="button" className={twJoin('h-5 w-5', customClass)} onClick={onClick}>
    <div className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</div>
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
        isOpen ? 'rotate-45' : '-translate-y-1.5'
      }`}
    />
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
        isOpen ? '-rotate-45' : 'translate-y-1.5'
      }`}
    />
  </button>
);

export default function SiteLayout({ children }: any) {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  const headerTitle = useActiveRouteLabel();
  const checkActivePath = useActivePath();

  return (
    <div className="grid min-h-screen grid-rows-header bg-black">
      <div>
        <header className="bg-slate-900 flex w-full fixed z-[200] h-16">
          <div className="h-100 px-4 flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center justify-start gap-4">
              <BurgerButton
                isOpen={mobileOpened}
                onClick={toggleMobile}
                customClass="block md:hidden"
              />
              <BurgerButton
                isOpen={desktopOpened}
                onClick={toggleDesktop}
                customClass="hidden md:block"
              />
              <p className="text-white font-bold text-lg block md:hidden">
                {headerTitle}
              </p>
              <p className="text-white font-bold text-lg hidden md:block">
                Adam Navarro
              </p>
            </div>
          </div>
        </header>
      </div>
      <div
        className={classNames({
          grid: true,
          'grid-cols-sidebarOpen': desktopOpened,
          'grid-cols-sidebarClosed': !desktopOpened,
        })}
      >
        <div>
          <nav
            className={classNames({
              'flex flex-col py-4 px-2': true, // layout
              'bg-slate-800': true, // colors
              'top-16 z-[200] fixed': true, // positioning
              'h-[calc(100dvh_-_96px)] w-[300px]': true, // for height and width
              'transition-transform .3s ease-in-out': true, //animations
              '-translate-x-full ': !desktopOpened, //hide sidebar to the left when closed
            })}
          >
            <div className="flex-grow overflow-hidden relative">
              <div className="w-full h-full">
                <div className="mr-2">
                  {navbarRoutes.map((item) => {
                    const isActive = checkActivePath(item.href);
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          toggleMobile();
                        }}
                        className={classNames({
                          'relative flex items-center p-2 mt-4 rounded-md font-medium':
                            true,
                          'bg-transparent hover:bg-slate-400 text-white hover:text-purple-600':
                            true,
                        })}
                        data-active={isActive || undefined}
                      >
                        <item.icon className="mr-2" />
                        <span className="flex-1">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>
        </div>
        {children}
      </div>
    </div>
  );
}
