import Link from 'next/link';

type NavigationTileProps = {
  href: string;
  icon: any;
  label: string;
};

function Tile(props: NavigationTileProps) {
  return (
    <Link
      href={props.href}
      className="rounded-md p-4 bg-surface hover-surface shadow-surface flex items-center"
    >
      <props.icon className="text-violet-500 dark:text-sky-200 h-5 w-5" />

      <div className="flex grow  justify-center">
        <div className="text-surface-primary text-base font-medium">
          {props.label}
        </div>
      </div>
    </Link>
  );
}

const Navigation = {
  Tile,
};

export default Navigation;
