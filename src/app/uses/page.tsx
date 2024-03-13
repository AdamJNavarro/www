import Image from 'next/image';
import Link from 'next/link';
import { getLogoPath, sortByAbc } from '~/utils';
import routes from '../config/routes';
import { Tag, UsesItem, computerUsesItems, miscUsesItems } from './uses.data';

export const { metadata } = routes.uses;

const tagClass =
  'text-[11px] inline-flex items-center font-bold leading-sm px-1.5 text-black/70 dark:text-black rounded-lg';

export default async function UsesPage() {
  return (
    <div>
      <div className="prose dark:prose-invert mb-16">
        <h1>Uses</h1>
        <p>A collection of products I use.</p>
      </div>
      <div className="prose dark:prose-invert mb-12">
        <h2>Computer</h2>
      </div>
      <div className="mt-8 mb-16">
        <UsesList items={computerUsesItems} />
      </div>
      <div className="prose dark:prose-invert mb-12">
        <h2>Lifestyle & Misc.</h2>
      </div>
      <div className="mt-8">
        <UsesList items={miscUsesItems} />
      </div>
    </div>
  );
}

function UsesList({ items }: { items: UsesItem[] }) {
  return (
    <div className="grid tablet:gap-4 grid-cols-1 desktop:grid-cols-2">
      {sortByAbc({ data: items, key: 'name' }).map((item) => {
        const { name, details, href, logo, tags } = item;

        return (
          <Link
            href={href}
            key={name}
            className="flex items-center py-6 px-2 tablet:bg-slate-900/80 tablet:rounded-md dark:tablet:border dark:border-slate-800"
          >
            <div className="flex-initial flex-shrink-0 justify-center mr-3">
              <Image
                src={logo || getLogoPath(name)}
                width={128}
                height={128}
                alt={`${name} icon`}
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col justify-center mr-2">
              <div className="mb-0.5 text-lg font-medium desktop:text-xl">
                {name}
              </div>
              <div className="text-slate-300/95 text-sm leading-tight">
                {details}
              </div>
              {tags && (
                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-3 opacity-90">
                  {tags.map((tag) => (
                    <span className={`${tagClass} ${getUsesBadgeColor(tag)}`}>
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
  if (tag === Tag.Ios) return 'dark:bg-sky-300';
  if (tag === Tag.Macos) return 'dark:bg-sky-300';
  if (tag === Tag.Free) return 'dark:bg-emerald-400';
  if (tag === Tag.Freemium) return 'dark:bg-emerald-400';
  if (tag === Tag.Subscription) return 'dark:bg-emerald-400';
  if (tag === Tag.OTP) return 'dark:bg-emerald-400';
  return 'dark:bg-violet-300';
}
