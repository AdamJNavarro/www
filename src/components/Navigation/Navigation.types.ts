type NavLinkProps = {
  icon: any;
  label: string;
  href: string;
  isExternal: boolean;
};

type SidebarLinkProps = NavLinkProps & {
  isActive: boolean;
};

interface SidebarSectionProps {
  label: string | null;
  items: SidebarLinkProps[];
}

export type { NavLinkProps, SidebarLinkProps, SidebarSectionProps };
