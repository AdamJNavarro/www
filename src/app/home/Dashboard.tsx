import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

interface DashboardCardProps {
  href: string;
  label: string;
  logo: string;
  children: any;
}

const logoSize = 24;

function Card({ href, label, logo, children }: DashboardCardProps) {
  const isExternal = !href.startsWith('/') && !href.startsWith('#');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : '_self'}
      className="rounded-md p-4 flex flex-col justify-between bg-surface border-surface hover-surface"
    >
      <div className="flex items-center justify-between gap-4 mb-4 ">
        <div className="flex items-center justify-start gap-4">
          <Image
            src={logo}
            width={logoSize}
            height={logoSize}
            alt={`dashboard ${label} icon`}
            className="h-6 w-6"
          />
          <div className="text-xl text-surface-primary">{label}</div>
        </div>
        {isExternal && (
          <IconArrowUpRight size={20} className="text-surface-tertiary" />
        )}
      </div>

      <div className="flex flex-col justify-center ">{children}</div>
    </Link>
  );
}

function Loading() {
  return (
    <div className="rounded-md p-4 bg-surface animate-pulse">
      <div className="flex flex-1 items-center justify-between gap-4 mb-4">
        <div className="flex items-center justify-start gap-4">
          <div className="h-6 w-6" />
          <div className="text-xl text-surface-primary"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Dashboard.Title></Dashboard.Title>
        <Dashboard.Details></Dashboard.Details>
      </div>
    </div>
  );
}

function Title(props) {
  return <div className="text-md text-surface-primary" {...props} />;
}

function Details(props) {
  return <div className="text-sm text-surface-secondary" {...props} />;
}

const Dashboard = {
  Card,
  Title,
  Details,
  Loading,
};

export default Dashboard;
