import React from 'react';
import ModalCard from './ModalCard';
import OfferModalCard from './OfferModalCard';
import OffersList from './OffersList';
import RequestsList from './RequestsList';

export default function HunterRequestsPage() {
  return (
    <div>
      <RequestsList />
      <ModalCard />
      <OffersList />
      <OfferModalCard />
    </div>
  );
}
