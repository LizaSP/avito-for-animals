import React from 'react';
import { useSelector } from 'react-redux';
import CategoryList from './hunter/CategoryList';
import AnimalAnketa from './owner/AnimalAnketa';

export default function ChoosePart() {
  const user = useSelector((s) => s.user);
  return (
    <div>
      {user?.role === 'owner' ? <AnimalAnketa /> : <CategoryList />}
    </div>
  );
}
