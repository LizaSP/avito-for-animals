import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OneCard from './OneCard';

export default function AnimalList() {
  const filteredAnimals = useSelector((s) => s.filteredAnimals);
  const requests = useSelector((s) => s.requests);
  const [filteredAnimalsWithoutRequests, setFilteredAnimalsWithoutRequests] = useState([]);
  useEffect(() => {
    // если заявка на животное уже подана, то оно не отражается при поиске
    setFilteredAnimalsWithoutRequests(filteredAnimals?.filter((el) => {
      let notPresent = true;
      // если находим в заявках id животного, убираем его из массива
      requests?.forEach((request) => {
        if (el.id === request.Animal.id) {
          notPresent = false;
        }
      });
      return notPresent;
    }));
  }, [requests, filteredAnimals]);
  // console.log(111, filteredAnimalsWithoutRequests);
  return (
    <div>
      {filteredAnimals?.length === 0 ? (
        <div style={{
          width: '90vw', height: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          Ничего не найдено
        </div>
      ) : (
        <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
          <div className="row gy-5 ">
            {filteredAnimalsWithoutRequests?.map((el) => <OneCard key={el.id} card={el} />)}
          </div>
        </div>
      )}
    </div>
  );
}
