import { redirect } from 'next/navigation';
import { auth } from '../auth';
import { AdminSignIn, AdminSignOut } from './AdminAuth';

export default async function AdminPage() {
  const session = await auth();
  //console.log('SESH', session);

  if (!session) {
    return <AdminSignIn />;
  }

  if (session?.user?.email !== 'adamjnav@gmail.com') {
    redirect('/');
  }

  return (
    <>
      <AdminSignOut />
    </>
  );
}
