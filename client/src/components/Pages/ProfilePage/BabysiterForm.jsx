/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import * as React from 'react';
// import { useTheme } from '@material-ui/core/style';
// import { Theme, useTheme } from '@material-ui/core/styles';
// import { useDispatch, useSelector } from 'react-redux';
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
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
// import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
  };
}
export default function BabysiterForm() {
  const { user } = useSelector((s) => s);
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editSitterHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.user_id = user?.id;
    // console.log(data);
    dispatch({ type: 'ADD_TO_BABYSITTERS', payload: data });
    navigate('/');
  };

  // ???????????? ?????? ??????????????????
  const [animal_type, setAnimaltype] = React.useState([]);

  const handleChangeType = (event) => {
    setAnimaltype(event.target.value);
  };
  const options = [
    { value: 'cats', name: '??????????' },
    { value: 'dogs', name: '????????????' },
    { value: 'foxes', name: '????????' },
    { value: 'wolves', name: '??????????' },
    { value: 'racoons', name: '??????????' },
  ];

  // ???????????? ???? period_category
  const [period_category, setPeriodcategory] = React.useState('');

  const handleChangePeCt = (event) => {
    setPeriodcategory(event.target.value);
  };

  const [price_category, setPricecategory] = React.useState('');

  const handleChangePrCt = (event) => {
    setPricecategory(event.target.value);
  };
  const [experience, setStatus] = React.useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
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
            <ChildFriendlyIcon />
          </Avatar>
          <Typography sx={{ mb: '20px' }} component="h1" variant="h5">
            ???????????????????????????? ?? AnimalSitters
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={editSitterHandler}
            // encType="multipart/form-data"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-mutiple-name-label">?????? ??????????????????</InputLabel>
                <Select
                  fullWidth
                  multiple
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={animal_type}
                  name="animal_type"
                  label="?????? ??????????????????"
                  MenuProps={MenuProps}
                  onChange={handleChangeType}
                >
                  {options?.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={getStyles(option.value, animal_type, theme)}>
                      {option.name}
                    </MenuItem>
                  ))}

                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">??????????</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={period_category}
                  label="??????????"
                  name="period_category"
                  onChange={handleChangePeCt}
                >
                  <MenuItem value={0}>-</MenuItem>
                  <MenuItem value="???? ????????????????????">???? ????????????????????</MenuItem>
                  <MenuItem value="??????????????">??????????????</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-select-small">?????? ????????????</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={price_category}
                  label="????????"
                  name="price_category"
                  onChange={handleChangePrCt}
                >
                  <MenuItem value="??????????????????">??????????????????</MenuItem>
                  <MenuItem value="????????????">????????????</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl fullWidth> */}
                <InputLabel id="demo-simple-select-label">???????? ?? ??????????????????</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={experience}
                  name="experience"
                  label="???????? ?? ??????????????????"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value="???????? ????????">???????? ????????</MenuItem>
                  <MenuItem value="??????????????????????">?????? ??????????</MenuItem>
                </Select>
                {/* </FormControl> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ????????????????????????????????????

              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
