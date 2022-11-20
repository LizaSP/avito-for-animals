import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HumanCard from './HumanCard';

export default function HumanList() {
  const filteredPeople = useSelector((s) => s.filteredPeople);
  // заявки, отправленные владельцем
  const humanRequests = useSelector((s) => s.humanRequests);
  const [filteredHumansWithoutRequests, setFilteredHumansWithoutRequests] = useState([]);
  useEffect(() => {
    // если заявка на животное уже подана, то оно не отражается при поиске
    setFilteredHumansWithoutRequests(filteredPeople?.filter((el) => {
      let notPresent = true;
      // если находим в заявках id хантера, убираем его из массива
      humanRequests?.forEach((request) => {
        if (el.user_id === request.hunter_id) {
          notPresent = false;
        }
      });
      return notPresent;
    }));
  }, [humanRequests, filteredPeople]);
  // console.log(111, filteredAnimalsWithoutRequests);
  // console.log({ filteredPeople });
  return (
    <div>
      {filteredHumansWithoutRequests?.length === 0 ? (
        <div style={{
          width: '90vw', height: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          Ничего не найдено
        </div>
      ) : (
        <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
          <div className="row gy-5 ">
            {filteredHumansWithoutRequests?.map((el) => <HumanCard key={el.id} card={el} />)}
          </div>
        </div>
      )}
    </div>
  );
}
