'use client';

import Home from '~/app/home';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function HomeClient() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Home />} />
    </>
  );
}
