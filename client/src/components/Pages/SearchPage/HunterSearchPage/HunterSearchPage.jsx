import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalList from './AnimalList';
import Filter from './Filter';

export default function HunterSearchPage() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_FAVOURITES', payload: user?.id });
    dispatch({ type: 'FETCH_USER_REQUESTS', payload: user?.id });
  }, []);
  return (
    <div>
      <div className="container">
        <Filter />
        <AnimalList />
      </div>
    </div>
  );
}
