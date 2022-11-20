/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import * as React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';
// import { FormControl } from '@mui/material';

const theme = createTheme();

export default function CreateAnimal() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // для фото
  const [fileData, setFileData] = React.useState([]);

  const fileChangeHandler = (e) => {
    // console.log(e.target.files);
    setFileData(e.target.files);
  };
  const navigate = useNavigate();
  const newAnimalHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(Object.fromEntries(data));
    data.append('images', fileData);
    dispatch({ type: 'ADD_ANIMAL', payload: data });
    navigate('/requests');
  };

  // const signupHandler = async (e) => {
  //   // console.log(Object.fromEntries(new FormData(e.target)));
  //   const data = new FormData(e.target);
  //   console.log(data);
  //   data.append('images', fileData);
  //   dispatch({ type: 'SIGNUP_USER', payload: data });
  // };

  // селект тип животного
  const [animal_type, setAnimaltype] = React.useState('');

  const handleChangeType = (event) => {
    setAnimaltype(event.target.value);
  };
  // селект на породу
  const [breed, setBreed] = React.useState('');

  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };
  // селект цвет
  const [color, setColor] = React.useState('');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  // инпут о возрасте
  const [age, setAge] = React.useState('');

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  // инпут о мед инфе
  const [med_info, setMed] = React.useState('');

  const handleChangeMed = (event) => {
    setMed(event.target.value);
  };
  // инпут о животном
  const [about, setAbout] = React.useState('');

  const handleChangeAbout = (event) => {
    setAbout(event.target.value);
  };
  // селект на price_category
  const [price_category, setPricecategory] = React.useState('');

  const handleChangePrCt = (event) => {
    setPricecategory(event.target.value);
  };
  // инпут на цену
  const [price, setPrice] = React.useState('');

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  // селект на period_category
  const [period_category, setPeriodcategory] = React.useState('');

  const handleChangePeCt = (event) => {
    setPeriodcategory(event.target.value);
  };
  // инпут на период передержки
  const [period, setPeriod] = React.useState('');

  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
  };
  // селект на пол животного
  const [gender, setGender] = React.useState('');

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Оформление заявки
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={newAnimalHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Имя</InputLabel>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-simple-select-label">Тип животного</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={animal_type}
                  name="animal_type"
                  label="Тип животного"
                  onChange={handleChangeType}
                >
                  <MenuItem value="cats">Кошки</MenuItem>
                  <MenuItem value="dogs">Собаки</MenuItem>
                  <MenuItem value="foxes">Лисы</MenuItem>
                  <MenuItem value="wolves">Волки</MenuItem>
                  <MenuItem value="racoons">Еноты</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  name="gender"
                  label="Пол"
                  onChange={handleChangeGender}
                >
                  <MenuItem value="Мальчик">Мальчик</MenuItem>
                  <MenuItem value="Девочка">Девочка</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12}>
                {animal_type === 'cats' ? (
                  <Grid item xs={12}>
                    <InputLabel id="demo-select-small">Порода</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={breed}
                      label="Порода"
                      name="breed"
                      onChange={handleChangeBreed}
                    >
                      <MenuItem value={0}>-</MenuItem>

                      <MenuItem value="Шотладская вислоухая">Шотладская вислоухая</MenuItem>
                      <MenuItem value="Мейн-кун">Мейн-кун</MenuItem>
                      <MenuItem value="Сибирская">Сибирская</MenuItem>
                      <MenuItem value="Золотая шиншила">Золотая шиншила</MenuItem>
                      <MenuItem value="Другое">Другое</MenuItem>
                    </Select>
                  </Grid>
                ) : animal_type === 'wolves' ? (
                  <Grid item xs={12}>
                    <InputLabel id="demo-select-small">Порода</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={breed}
                      name="breed"
                      label="Порода"
                      onChange={handleChangeBreed}
                    >
                      <MenuItem value={0}>-</MenuItem>
                      <MenuItem value="Арктический">Арктический</MenuItem>
                      <MenuItem value="Кавказский">Кавказский</MenuItem>
                      <MenuItem value="Сибирский лесной">Сибирский лесной</MenuItem>
                      <MenuItem value="Японский">Японский</MenuItem>
                      <MenuItem value="Другое">Другое</MenuItem>
                    </Select>
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    <InputLabel id="demo-select-small">Порода</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={breed}
                      name="breed"
                      label="Порода"
                      onChange={handleChangeBreed}
                    >
                      <MenuItem value={0}>-</MenuItem>
                    </Select>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">Цвет</InputLabel>
                <Select
                  fullWidth
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  value={color}
                  label="Цвет"
                  name="color"
                  onChange={handleChangeColor}
                >
                  <MenuItem value={0}>-</MenuItem>
                  <MenuItem value="Черный">Черный</MenuItem>
                  <MenuItem value="Белый">Белый</MenuItem>
                  <MenuItem value="Рыжий">Рыжий</MenuItem>
                  <MenuItem value="Серый">Серый</MenuItem>
                  <MenuItem value="Другое">Другое</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">Возраст</InputLabel>
                <TextField
                  fullWidth
                  value={age}
                  name="age"
                  onChange={handleChangeAge}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">Медицинские данные</InputLabel>
                <TextField
                  fullWidth
                  value={med_info}
                  name="med_info"
                  onChange={handleChangeMed}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">О питомце</InputLabel>
                <TextField
                  fullWidth
                  value={about}
                  name="about"
                  onChange={handleChangeAbout}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">Тип оплаты</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={price_category}
                  label="Цена"
                  name="price_category"
                  onChange={handleChangePrCt}
                >
                  <MenuItem value={0}>-</MenuItem>
                  <MenuItem value="Бесплатно">Бесплатно</MenuItem>
                  <MenuItem value="Платно">Платно</MenuItem>
                </Select>
              </Grid>
              {price_category === 'Платно' ? (
                <Grid item xs={12}>
                  <InputLabel id="demo-select-small">Цена/Оплата</InputLabel>
                  <TextField
                    fullWidth
                    value={price}
                    name="price"
                    onChange={handleChangePrice}
                  />
                </Grid>
              ) : ('')}
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">Время</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={period_category}
                  label="Время"
                  name="period_category"
                  onChange={handleChangePeCt}
                >
                  <MenuItem value={0}>-</MenuItem>
                  <MenuItem value="На передержку">На передержку</MenuItem>
                  <MenuItem value="Забрать">Отдать</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                {period_category === 'На передержку' ? (
                  <Grid item xs={12}>
                    <InputLabel id="demo-select-small">На сколько вы хотите оставить вашего питомца</InputLabel>
                    <InputLabel id="demo-select-small">на передержку?</InputLabel>
                    <TextField
                      fullWidth
                      value={period}
                      name="period"
                      onChange={handleChangePeriod}
                    />
                  </Grid>
                ) : ('')}
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">Выбрать фото</InputLabel>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input name="images" onChange={fileChangeHandler} hidden accept="image/*" multiple type="file" />
                  <PhotoCamera />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Зарегистрировать
                </Button>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
