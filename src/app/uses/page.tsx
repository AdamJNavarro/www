import Link from 'next/link';
import { getLogoPath, sortByAbc } from '~/utils';
import routes from '../config/routes';
import { Tag, UsesItem, computerUsesItems, miscUsesItems } from './uses.data';
import ThemeImage from '~/components/common/ThemeImage';

export const { metadata } = routes.uses;

const tagClass =
  'text-[11px] inline-flex items-center font-bold leading-sm px-1.5 text-black/80 dark:text-black rounded-lg';

export default async function UsesPage() {
  return (
    <div>
      <h1 className="page-h1 text-center">Uses</h1>
      <h2 className="page-h2 text-center">Computer</h2>

      <div className="mb-24">
        <UsesList items={computerUsesItems} />
      </div>
      <h2 className="page-h2 text-center">Lifestyle & Misc.</h2>

      <div className=" mb-24">
        <UsesList items={miscUsesItems} />
      </div>
    </div>
  );
}

function UsesList({ items }: { items: UsesItem[] }) {
  return (
    <div className="grid tablet:gap-4 grid-cols-1 desktop:grid-cols-2">
      {sortByAbc({ data: items, key: 'name' }).map((item) => {
        const { name, details, href, logo, tags, hasThemeLogos } = item;

        return (
          <Link
            href={href}
            key={name}
            className="flex items-center py-5 tablet:px-4 tablet:bg-surface tablet:border-surface tablet:hover-surface tablet:rounded-md tablet:shadow-surface"
          >
            <div className="flex-initial shrink-0 justify-center mr-3">
              <ThemeImage
                srcDark={
                  logo || getLogoPath(name, hasThemeLogos ? 'dark' : undefined)
                }
                srcLight={
                  logo || getLogoPath(name, hasThemeLogos ? 'light' : undefined)
                }
                width={128}
                height={128}
                alt={`${name} icon`}
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col justify-center mr-2">
              <div className="text-surface-primary mb-0.5 text-md font-medium">
                {name}
              </div>
              <div className="text-surface-secondary text-sm leading-tight">
                {details}
              </div>
              {tags && (
                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-3 opacity-90">
                  {tags.map((tag) => (
                    <span
                      key={`${name}-${tag}-tag`}
                      className={`${tagClass} ${getUsesBadgeColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function getUsesBadgeColor(tag: Tag): string {
  if (tag === Tag.Ios) return 'bg-sky-200 dark:bg-sky-300';
  if (tag === Tag.Macos) return 'bg-sky-200 dark:bg-sky-300';
  if (tag === Tag.Free) return 'bg-emerald-200 dark:bg-emerald-400';
  if (tag === Tag.Freemium) return 'bg-emerald-200 dark:bg-emerald-400';
  if (tag === Tag.Subscription) return 'bg-emerald-200 dark:bg-emerald-400';
  if (tag === Tag.OTP) return 'bg-emerald-200 dark:bg-emerald-400';
  return 'bg-violet-200 dark:bg-violet-300';
}
