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
      className="rounded-md p-4 bg-surface hover-surface shadow-surface"
    >
      <div className="flex flex-col items-center justify-center text-center h-20  text-md">
        <props.icon
          className="text-violet-500 dark:text-violet-400 h-7 w-7"
          size={28}
        />
        <div className="mt-2 text-surface-secondary font-medium">{props.label}</div>
      </div>
    </Link>
  );
}

const Navigation = {
  Tile,
};

export default Navigation;
