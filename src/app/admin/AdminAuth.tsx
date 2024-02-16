'use client';

import { Button } from '@mantine/core';
import { signIn, signOut } from 'next-auth/react';

export function AdminSignIn() {
  return <Button onClick={() => signIn('github')}>Sign In with Github</Button>;
}

export function AdminSignOut() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
