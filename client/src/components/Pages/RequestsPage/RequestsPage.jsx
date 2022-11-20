import React from 'react';
import { useSelector } from 'react-redux';
import HunterRequestsPage from './HunterRequestsPage';
import OwnerRequestsPage from './OwnerRequestsPage';

export default function RequestsPage() {
  const user = useSelector((s) => s.user);
  return (
    <div>
      {user?.role === 'hunter' ? <HunterRequestsPage /> : <OwnerRequestsPage />}
    </div>
  );
}
