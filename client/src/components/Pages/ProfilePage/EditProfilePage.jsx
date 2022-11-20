import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EverNote
      </Link>
      {` ${new Date().getFullYear()}`}
    </Typography>
  );
}

const theme = createTheme();

export default function EditProfilePage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // для фото
  const [fileData, setFileData] = React.useState();

  const fileChangeHandler = (e) => {
    // console.log(e.target.files);
    setFileData(e.target.files);
  };

  const editUserHandler = async (e) => {
    e.preventDefault();
    // console.log(Object.fromEntries(new FormData(e.target)));
    const data = new FormData(e.target);
    console.log(data);
    data.append('images', fileData);
    dispatch({ type: 'EDIT_USER', payload: data });
    navigate(`/profile/${user.id}`);
  };
  console.log(user?.gender);
  // селект на гендер
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const [phone, setPhone] = React.useState('');

  const handleChangephone = (event) => {
    setPhone(event.target.value);
  };
  const [firstName, setfirstName] = React.useState('');

  const handleChangefirstName = (event) => {
    setfirstName(event.target.value);
  };
  const [lastName, setlastName] = React.useState('');

  const handleChangelastName = (event) => {
    setlastName(event.target.value);
  };
  // инпут для инфы о себе
  const [info, setValue] = React.useState('');

  const handleChangeInfo = (event) => {
    setValue(event.target.value);
  };

  // селект на город
  const [location, setLocation] = React.useState('');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  // селект на опыт с животными
  const [status, setStatus] = React.useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  // инпут на соц сеть
  const [sm, setSM] = React.useState('');

  const handleChangeSM = (event) => {
    setSM(event.target.value);
  };

  const [email, setEmail] = React.useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  React.useEffect(() => {
    setfirstName(user?.firstName);
    setlastName(user?.lastName);
    setEmail(user?.email);
    setPhone(user?.phone);
    setGender(user?.gender);
    setSM(user?.websites);
    setStatus(user?.status);
    setLocation(user?.location);
    setValue(user?.info);
  }, [user]);
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Редактирования профиля
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={editUserHandler}
            // encType="multipart/form-data"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={handleChangefirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleChangelastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="+79101234567"
                  name="phone"
                  value={phone}
                  onChange={handleChangephone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChangeEmail}
                />
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
                  onChange={handleChange}
                >
                  {/* <MenuItem value={0}>-</MenuItem> */}
                  <MenuItem value="Мужчина">Мужчина</MenuItem>
                  <MenuItem value="Женщина">Женщина</MenuItem>
                </Select>
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  name="location"
                  label="Город"
                  onChange={handleChangeLocation}
                >
                  <MenuItem value="Москва">Москва</MenuItem>
                  <MenuItem value="Питер">Питер</MenuItem>
                  <MenuItem value="Сочи">Сочи</MenuItem>
                  <MenuItem value="Екатиренбург">Екатиренбург</MenuItem>
                  <MenuItem value="Рязань">Рязань</MenuItem>
                  <MenuItem value="Грозный">Грозный</MenuItem>
                </Select>
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-simple-select-label">Опыт с животными</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  name="status"
                  label="Опыт с животными"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value="Yes">Есть опыт</MenuItem>
                  <MenuItem value="No">Нет опыта</MenuItem>
                </Select>
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Ссылки на социальные сети"
                  value={sm}
                  name="websites"
                  onChange={handleChangeSM}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Информация о себе"
                  multiline
                  maxRows={10}
                  value={info}
                  name="info"
                  onChange={handleChangeInfo}
                />
              </Grid>
              <Grid item xs={12}>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input name="images" onChange={fileChangeHandler} hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Сохранить

            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
