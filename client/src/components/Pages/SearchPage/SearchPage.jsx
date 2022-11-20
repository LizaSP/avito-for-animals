import React from 'react';
import { useSelector } from 'react-redux';
import HunterSearchPage from './HunterSearchPage';
import OwnerSearchPage from './OwnerSearchPage';

export default function SearchPage() {
  const user = useSelector((s) => s.user);
  return (
    <div>
      {user?.role === 'owner' ? <OwnerSearchPage /> : <HunterSearchPage />}
    </div>
  );
}
