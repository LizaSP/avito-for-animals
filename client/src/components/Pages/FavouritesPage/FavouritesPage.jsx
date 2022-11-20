import React from 'react';
import { useSelector } from 'react-redux';
import Favourites from './Favourites';
import OwnerFavourites from './OwnerFavourites';

export default function FavouritesPage() {
  const user = useSelector((s) => s.user);
  return (
    <div style={{ minHeight: '65vh' }}>
      {user?.role === 'hunter' ? <Favourites /> : <OwnerFavourites />}
    </div>
  );
}
