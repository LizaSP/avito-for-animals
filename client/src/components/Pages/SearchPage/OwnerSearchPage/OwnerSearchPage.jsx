import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HumanList from './HumanList';
import HumanFilter from './HumanFilter';

export default function OwnerSearchPage() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_HUMANS', payload: user?.id });
    dispatch({ type: 'FETCH_FAVOURITES_HUMANS', payload: user?.id });
    dispatch({ type: 'FETCH_REQUESTS_FOR_HUMANS', payload: user?.id });
  }, []);
  return (
    <div>
      <div className="container">
        <HumanFilter />
        <HumanList />
      </div>
    </div>
  );
}
