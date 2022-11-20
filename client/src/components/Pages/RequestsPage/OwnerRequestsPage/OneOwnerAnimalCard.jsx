import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'better-react-carousel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Button, CardMedia, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HunterInfoCard from './HunterInfoCard';

export default function OneOwnerAnimalCard({ animal }) {
  // const { ownerAnimals } = useSelector((s) => s);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_REQUESTS_BY_ANIMAL', payload: { animal_id: animal?.id } });
  // }, []);

  const { ownerRequests } = useSelector((s) => s);
  // console.log(ownerRequests);
  const [ownerRequest, setOwnerRequest] = useState([]);
  useEffect(() => {
    // axios(`/api/requests/${animal?.id}/animals`)
    //   .then((res) => setOwnerRequests(res.data));
    setOwnerRequest(ownerRequests.filter((request) => request?.Animal?.id === animal?.id));
  }, []);

  const deleteAnimalHandler = async () => {
    dispatch({ type: 'DELETE_OWNER_ANIMAL_BY_ID', payload: { animal_id: animal?.id } });
  };
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const imaag = JSON.parse(animal.images)[0];
  // console.log(ownerRequests, 345);
  return (
    <Box>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          fontSize: '80px', fontWeight: 'bolder', mb: '2em', ml: '5em',
        }}
        >
          <LightTooltip title={(
            <CardMedia component="img" src={`images/${imaag}`} alt="dfhdfhb" />
            // <img src="volk3.jpg" alt="dfhdfhb" />
        )}
          >
            <Typography style={{ fontSize: 'xx-large', marginRight: '10px' }}>
              {`Заявки на: ${animal?.name}`}
            </Typography>
          </LightTooltip>

        </div>
        <Avatar alt="Remy Sharp" src={`images/${imaag}`} />
        <Box style={{ marginLeft: '4%' }}>
          <Button variant="contained" color="primary" aria-label="add" size="small" onClick={deleteAnimalHandler}>
            <DeleteIcon />
          </Button>
        </Box>
        {/* <Box style={{ marginLeft: '4%' }}>
          <Fab color="primary" aria-label="add" size="small" onClick={deleteAnimalHandler}>
            <DeleteIcon />
          </Fab>
        </Box> */}
        <Box style={{ marginLeft: '2%' }}>
          <Button variant="contained" color="primary" component={Link} to={`/animals/${animal?.id}/edit`} size="small"><EditIcon /></Button>
        </Box>
      </div>
      <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
        <div className="row gy-5 ">
          <Carousel cols={3} rows={1} gap={10} loop>

            {ownerRequest?.map((el) => (
              <Carousel.Item key={el.id}>
                <HunterInfoCard key={el} request={el} />
                {' '}
              </Carousel.Item>
            ))}

          </Carousel>
        </div>
      </div>
    </Box>
  );
}
