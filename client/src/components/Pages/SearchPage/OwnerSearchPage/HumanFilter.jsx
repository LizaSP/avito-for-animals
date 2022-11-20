/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
  setFilteredHumans, updateFilteredHumans, updateFilteredHumansByAnimalType, updateFilteredHumansByUser,
} from '../../../../redux/reducers/filteredHumansReducer';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
  };
}

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

export default function HumanFilter() {
  const dispatch = useDispatch();
  const theme = useTheme();
  // const { user } = useSelector((s) => s);

  // React.useEffect(() => {
  //   dispatch({ type: 'FETCH_ALL_HUMANS', payload: user?.id });
  // }, []);

  const people = useSelector((s) => s.people);
  console.log({ people });
  const [animal_type, setAnimalType] = React.useState([]);
  const handleChangeType = (event) => {
    setAnimalType(event.target.value);
  };
  const options = [
    { value: 'cats', name: 'Кошки' },
    { value: 'dogs', name: 'Собаки' },
    { value: 'foxes', name: 'Лисы' },
    { value: 'wolves', name: 'Волки' },
    { value: 'racoons', name: 'Еноты' },
  ];
  const [price_category, priceCategoryChange] = React.useState(0);
  const [period_category, periodСategoryChange] = React.useState(0);
  const [experience, experienceChange] = React.useState(0);
  const [gender, genderChange] = React.useState(0);
  const [location, locationChange] = React.useState(0);

  React.useEffect(() => {
    dispatch(setFilteredHumans(people));
    // console.log(animal_type);
    if (animal_type?.length) {
      // dispatch(updateFilteredHumans({ key: 'animal_type', value: animal_type.join('') }));
      // dispatch(updateFilteredHumansByAnimalType({ key: 'animal_type', value: animal_type.join(',') }));
      dispatch(updateFilteredHumansByAnimalType({ key: 'animal_type', value: animal_type }));
      // setFilteredRestaurants((prev) => prev.filter((el) => el.price === price));
    }
    if (experience) {
      dispatch(updateFilteredHumans({ key: 'experience', value: experience }));
    }
    if (period_category) {
      dispatch(updateFilteredHumans({ key: 'period_category', value: period_category }));
    }
    if (price_category) {
      dispatch(updateFilteredHumans({ key: 'price_category', value: price_category }));
    }
    if (gender) {
      dispatch(updateFilteredHumansByUser({ key: 'gender', value: gender }));
    }
    if (location) {
      dispatch(updateFilteredHumansByUser({ key: 'location', value: location }));
    }
  }, [
    animal_type?.length,
    price_category,
    period_category,
    experience,
    people,
    location,
    gender,
  ]);

  const handleClear = () => {
    dispatch(setFilteredHumans(people));
    setAnimalType([]);
    priceCategoryChange(0);
    periodСategoryChange(0);
    experienceChange(0);
    locationChange(0);
  };

  return (
    <div>
      <div style={{
        display: 'flex', columnGap: '20px',
      }}
      >
        {/* <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Категория</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={animal_type}
              label="Категория животного"
              onChange={(e) => setAnimalType(e.target.value)}
            >
              <MenuItem value={0}>-</MenuItem>
              <MenuItem value="cats">Кошки</MenuItem>
              <MenuItem value="dogs">Собаки</MenuItem>
              <MenuItem value="foxes">Лисы</MenuItem>
              <MenuItem value="wolves">Волки</MenuItem>
              <MenuItem value="racoons">Еноты</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
        <Box sx={{ minWidth: 160 }}>
          <FormControl sx={{ minWidth: 160 }} size="small">
            <InputLabel id="demo-mutiple-name-label">Тип животного</InputLabel>
            <Select
              fullWidth
              multiple
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={animal_type}
              name="animal_type"
              label="Тип животного"
              MenuProps={MenuProps}
              onChange={handleChangeType}
            >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value} style={getStyles(option.value, animal_type, theme)}>
                  {option.name}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
        </Box>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Цена</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price_category}
                label="Цена"
                onChange={(e) => priceCategoryChange(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="Бесплатно">Бесплатно</MenuItem>
                <MenuItem value="Платно">Платно</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Опыт</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={experience}
                label="Опыт"
                onChange={(e) => experienceChange(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="Есть опыт">Есть опыт</MenuItem>
                <MenuItem value="Отсутствует">Отсутствует</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Время</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={period_category}
                label="Время"
                onChange={(e) => periodСategoryChange(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="На передержку">На передержку</MenuItem>
                <MenuItem value="Забрать">Забрать</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Пол</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Пол"
                onChange={(e) => genderChange(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="Мужчина">Мужчина</MenuItem>
                <MenuItem value="Женщина">Женщина</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Город</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                name="location"
                label="Город"
                onChange={(e) => locationChange(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="Москва">Москва</MenuItem>
                <MenuItem value="Питер">Питер</MenuItem>
                <MenuItem value="Сочи">Сочи</MenuItem>
                <MenuItem value="Екатиренбург">Екатиренбург</MenuItem>
                <MenuItem value="Рязань">Рязань</MenuItem>
                <MenuItem value="Грозный">Грозный</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Link component="button" className="button is-info" onClick={handleClear}>Все участники</Link>
      </div>
    </div>
  );
}
