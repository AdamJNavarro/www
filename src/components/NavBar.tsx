'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarRoutes } from '~/app/config/routes';

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

export default function NavBar() {
  const pathname = usePathname();
  const checkActivePath = useActivePath();
  const shouldHideHeader = pathname.startsWith('/resume');

  return (
    <aside
      className={classNames({
        'mb-24 tracking-tight': true,
        hidden: shouldHideHeader,
      })}
    >
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between relative px-0 pb-0 fade scroll-pr-6"
          id="nav"
        >
          <div className="relative flex items-center justify-center">
            <Image
              src="/img/bitmoji.png"
              priority
              height={398}
              width={398}
              alt="adam-bitmoji"
              className="h-10 w-10 tablet:h-12 tablet:w-12"
            />
          </div>
          <div className="flex flex-row space-x-0">
            {navbarRoutes.map((item) => {
              const isActive = checkActivePath(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={classNames({
                    'relative flex items-center py-6 px-2 tablet:px-4 rounded-md font-medium text-md':
                      true,
                    'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white':
                      true,
                    'underline underline-offset-4 decoration-2 decoration-violet-500':
                      isActive,
                  })}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
