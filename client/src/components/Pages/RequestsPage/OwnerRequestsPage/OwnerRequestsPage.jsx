import { Box } from '@mui/material';
import React from 'react';
import ModalCard from './ModalCard';
import AnimalList from './AnimalList';

export default function OwnerRequestsPage() {
  return (
    <Box>
      <AnimalList />
      <ModalCard />
    </Box>
  );
}
