import NavSidebar from '../Navigation/NavSidebar';

export default function SiteLayout({ children }: any) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <NavSidebar />
      <div style={{ display: 'flex', flex: 1 }}>{children}</div>
    </div>
  );
}
