import React from 'react';
import OneCategoryCard from './OneCategoryCard';

export default function CategoryList() {
  return (
    <>
      <p style={{ fontSize: '200%', textAlign: 'center', paddingTop: '40px' }}>Выберите категорию</p>
      <div style={{
        textAlign: 'center',
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '23px',
      }}
      >
        <OneCategoryCard />
      </div>
    </>

  );
}
