/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredAnimals, updateFilteredAnimals } from '../../../../redux/reducers/filteredAnimalsReducer';

export default function Filter() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const { animal } = useParams();
  // console.log(1, animal);
  const [animal_type, animalCategoryChange] = React.useState(0);
  // при переходе с хоумпэйдж
  React.useEffect(() => {
    dispatch({ type: 'FETCH_ALL_ANIMALS', payload: user?.id });
    if (animal !== 'undefined') {
      animalCategoryChange(animal);
    }
  }, []);
  const animals = useSelector((s) => s.animals);
  const [breed, breedChange] = React.useState(0);
  const [color, changeColor] = React.useState(0);
  const [price_category, priceCategoryChange] = React.useState(0);
  const [period_category, periodСategoryChange] = React.useState(0);
  const [gender, genderChange] = React.useState(0);
  // // const filteredAnimals = useSelector((s) => s.filteredAnimals);

  React.useEffect(() => {
    dispatch(setFilteredAnimals(animals));
    // console.log(animal_type);
    if (animal_type) {
      dispatch(setFilteredAnimals(animals));
      dispatch(updateFilteredAnimals({ key: 'animal_type', value: animal_type }));
      // setFilteredRestaurants((prev) => prev.filter((el) => el.price === price));
    }
    if (breed) {
      dispatch(updateFilteredAnimals({ key: 'breed', value: breed }));
    }
    if (color) {
      dispatch(updateFilteredAnimals({ key: 'color', value: color }));
    }
    if (period_category) {
      dispatch(updateFilteredAnimals({ key: 'period_category', value: period_category }));
    }
    if (price_category) {
      dispatch(updateFilteredAnimals({ key: 'price_category', value: price_category }));
    }
    if (gender) {
      dispatch(updateFilteredAnimals({ key: 'gender', value: gender }));
    }
  }, [
    animal_type,
    breed,
    color,
    price_category,
    period_category,
    gender,
    animals,
    user?.role,
  ]);

  const handleClear = () => {
    dispatch(setFilteredAnimals(animals));
    animalCategoryChange(0);
    breedChange(0);
    changeColor(0);
    priceCategoryChange(0);
    periodСategoryChange(0);
    genderChange(0);
  };

  return (
    <div>
      <div style={{
        display: 'flex', columnGap: '20px', alignItems: 'flex-end',
      }}
      >
        <div>
          <Box sx={{ minWidth: 120, mb: '2em' }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Категория</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={animal_type}
                label="Категория животного"
                onChange={(e) => animalCategoryChange(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="cats">Кошки</MenuItem>
                <MenuItem value="dogs">Собаки</MenuItem>
                <MenuItem value="foxes">Лисы</MenuItem>
                <MenuItem value="wolves">Волки</MenuItem>
                <MenuItem value="racoons">Еноты</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div style={{
        display: 'flex', columnGap: '20px', alignItems: 'flex-end', mb: '2em',
      }}
      >
        <div>
          {animal_type === 'cats' ? (
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Порода</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={breed}
                  label="Порода"
                  onChange={(e) => breedChange(e.target.value)}
                >
                  <MenuItem value={0}>-</MenuItem>

                  <MenuItem value="Шотладская вислоухая">Шотладская вислоухая</MenuItem>
                  <MenuItem value="Мейн-кун">Мейн-кун</MenuItem>
                  <MenuItem value="Сибирская">Сибирская</MenuItem>
                  <MenuItem value="Золотая шиншила">Золотая шиншила</MenuItem>
                  <MenuItem value="Другое">Другое</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : animal_type === 'wolves' ? (
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Порода</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={breed}
                  label="Порода"
                  onChange={(e) => breedChange(e.target.value)}
                >
                  <MenuItem value={0}>-</MenuItem>
                  <MenuItem value="Арктический">Арктический</MenuItem>
                  <MenuItem value="Кавказский">Кавказский</MenuItem>
                  <MenuItem value="Сибирский лесной">Сибирский лесной</MenuItem>
                  <MenuItem value="Японский">Японский</MenuItem>
                  <MenuItem value="Другое">Другое</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Порода</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={breed}
                  label="Порода"
                  onChange={(e) => breedChange(e.target.value)}
                >
                  <MenuItem value={0}>-</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Цвет</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                label="Цвет"
                onChange={(e) => changeColor(e.target.value)}
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value="Черный">Черный</MenuItem>
                <MenuItem value="Белый">Белый</MenuItem>
                <MenuItem value="Рыжий">Рыжий</MenuItem>
                <MenuItem value="Серый">Серый</MenuItem>
                <MenuItem value="Другое">Другое</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
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
                <MenuItem value="Мальчик">Мальчик</MenuItem>
                <MenuItem value="Девочка">Девочка</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Link component="button" className="button is-info" onClick={handleClear}>Все животные</Link>
      </div>
    </div>
  );
}
