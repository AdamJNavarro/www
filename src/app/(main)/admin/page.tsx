import { redirect } from 'next/navigation';
import { AdminSignIn, AdminSignOut } from './AdminAuth';
import { auth } from '~/app/auth';

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
    <div className="space-y-12">
      <AdminSignOut />
    </div>
  );
}
