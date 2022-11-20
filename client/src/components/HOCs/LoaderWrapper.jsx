import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../ui/Loader';

export default function LoaderWrapper({ children }) {
  const user = useSelector((state) => state.user);
  if (user.loading) {
    return <Loader />;
  }
  return children;
}
