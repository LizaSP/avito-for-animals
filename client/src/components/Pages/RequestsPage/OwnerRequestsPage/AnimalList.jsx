import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OneOwnerAnimalCard from './OneOwnerAnimalCard';

export default function AnimalList() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_OWNER_ANIMALS', payload: user?.id });
  }, []);
  const allOwnerAnimals = useSelector((s) => s.ownerAnimals);
  return (
    <div>
      {allOwnerAnimals.length ? (
        <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
          <div className="row gy-5 ">
            {allOwnerAnimals?.map((el) => <OneOwnerAnimalCard key={el.id} animal={el} />)}
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', minHeight: 'calc(70vh - 300px)' }}>
          <h2
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', textAlign: 'center',
            }}
          >
            У вас нет питомцев.
            <Link to="/animals/new" style={{ color: 'blue' }}>Добавить</Link>
          </h2>
        </div>
      )}
    </div>
  );
}
