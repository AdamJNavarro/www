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
  return (
    <Link
      href={href}
      target="_blank"
      className="rounded-md p-4 bg-slate-900/80 flex flex-col justify-between dark:border dark:border-slate-800"
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
          <div className="text-xl text-slate-100">{label}</div>
        </div>
        <IconArrowUpRight size={20} className="text-slate-400" />
      </div>

      <div className="flex flex-col justify-center ">{children}</div>
    </Link>
  );
}

function Loading() {
  return (
    <div className="rounded-md p-4 bg-zinc-900 animate-pulse">
      <div className="flex flex-1 items-center justify-between gap-4 mb-4">
        <div className="flex items-center justify-start gap-4">
          <div className="h-6 w-6" />
          <div className="text-xl text-zinc-100"></div>
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
  return <div className="text-md text-slate-100/2" {...props} />;
}

function Details(props) {
  return <div className="text-sm text-slate-300/95" {...props} />;
}

const Dashboard = {
  Card,
  Title,
  Details,
  Loading,
};

export default Dashboard;
