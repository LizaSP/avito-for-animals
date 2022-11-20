import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OneFavouriteCard from './OneFavouriteCard';

export default function Favourites() {
  // const requests = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const favourites = useSelector((s) => s.favourites);
  // const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_FAVOURITES', payload: user?.id });
  }, []);
  return (
    <div>
      {favourites?.length > 0 ? (
        <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
          <div className="row gy-5 ">
            {favourites?.map((el) => <OneFavouriteCard key={el.id} card={el} />)}
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', minHeight: 'calc(100vh - 70px)' }}>
          <h2
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px',
            }}
          >
            У Вас нет избранных.
            {' '}
            <Link to="/search" style={{ color: 'blue' }}>Добавить</Link>
          </h2>
        </div>
      )}
    </div>
  );
}
