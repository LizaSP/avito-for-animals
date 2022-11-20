import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import Button from '@mui/material/Button';

export default function AnimalAnketa() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '60px',
    }}
    >
      <Button className="button is-info" component={Link} to="/animals/new" size="large">Добавить животное</Button>
      <br />
    </div>
  );
}
