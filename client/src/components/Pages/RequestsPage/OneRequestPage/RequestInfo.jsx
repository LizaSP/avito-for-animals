import { CardMedia } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, CardBody, CardHeader, CardText, CardTitle,
} from 'reactstrap';
import CauruselForCards from '../../SearchPage/HunterSearchPage/CauruselForCards';

export default function RequestInfo({ request }) {
  const user = useSelector((s) => s.user);
  // const modal = useSelector((s) => s.modal);
  const card = request?.Animal;
  console.log(card);
  const people = request?.Animal?.User;
  const hunter = request?.User;

  // console.log(modal);
  // console.log(people);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card
        className="my-2"
        color="dark"
        outline
        style={{
          width: '22rem', fontSize: '23px', height: '700px',
        }}
      >
        <CardMedia
          component="img"
          alt="Card"
          src={`/images/${user?.avatar}`}
          style={{ maxWidth: '22rem', height: '300px' }}
        />
        <CardHeader>
          {`${user?.firstName} ${user?.lastName}`}
        </CardHeader>
        <CardHeader>
          Пол:
          {' '}
          {user?.gender}
        </CardHeader>
        <CardHeader>
          {user?.email}
        </CardHeader>
        <CardHeader>
          Город:
          {' '}
          {user?.location}
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            <small className="text-muted">
              Информация:
              {' '}
              {user?.info}
            </small>
          </CardTitle>
        </CardBody>
      </Card>
      <div style={{
        textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
      }}
      >
        <img
          alt="card"
          src="https://cdn-icons-png.flaticon.com/512/35/35456.png"
          style={{ maxWidth: '600px', maxHeight: '300px' }}
        />
        <Card
          className="my-2"
          style={{
            width: '25rem', fontSize: '22px', height: '500px',
          }}
        >
          <CauruselForCards
            card={card}
            style={{
              height: 180,
            }}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Имя:
              {' '}
              {card?.name}
            </CardTitle>
            <CardText>
              Порода:
              {' '}
              {card?.breed}
              <br />
              Возраст:
              {' '}
              {card?.age}
            </CardText>
            <CardText>
              {(card?.period_category === 'Забрать')
                ? (
                  <>
                    Стоимость:
                    {' '}
                    {card?.price}
                  </>
                )
                : (
                  <>
                    Период :
                    {' '}
                    { card?.period }
                  </>
                )}
            </CardText>
            <CardText>
              <small className="text-muted">
                Описание:
                {' '}
                {card?.about}
              </small>
            </CardText>
          </CardBody>
        </Card>
      </div>
      {(user?.role === 'owner') ? (
        <Card
          className="my-2"
          color="dark"
          outline
          style={{
            width: '22rem', fontSize: '20px', height: '700px',
          }}
        >
          <img
            alt="Card"
            src={`/images/${hunter?.avatar}`}
            style={{ maxWidth: '22rem' }}
          />
          <CardHeader>
            {hunter?.role}
          </CardHeader>
          <CardHeader>
            {`${hunter?.firstName} ${hunter?.lastName}`}
          </CardHeader>
          <CardHeader>
            Пол:
            {' '}
            {hunter?.gender}
          </CardHeader>
          <CardHeader>
            {hunter?.email}
          </CardHeader>
          <CardHeader>
            Город:
            {' '}
            {hunter?.location}
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">
              <small className="text-muted">
                Информация:
                {' '}
                {hunter?.info}
              </small>
            </CardTitle>
          </CardBody>
        </Card>
      )
        : (
          <Card
            className="my-2"
            color="dark"
            outline
            style={{
              width: '22rem', fontSize: '23px', height: '700px',
            }}
          >
            <img
              alt="Card"
              src={`/images/${people?.avatar}`}
              style={{ maxWidth: '22rem', height: '300px' }}
            />
            <CardHeader>
              {`${people?.firstName} ${people?.lastName}`}
            </CardHeader>
            <CardHeader>
              Пол:
              {' '}
              {people?.gender}
            </CardHeader>
            <CardHeader>
              {people?.email}
            </CardHeader>
            <CardHeader>
              Город:
              {' '}
              {people?.location}
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                <small className="text-muted">
                  Информация:
                  {' '}
                  {people?.info}
                </small>
              </CardTitle>
            </CardBody>
          </Card>
        ) }
    </div>

  );
}
