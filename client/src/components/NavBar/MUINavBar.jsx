import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PetsIcon from '@mui/icons-material/Pets';
import { setUserRequests } from '../../redux/reducers/requestsReducer';
import { setOwnerAnimals } from '../../redux/reducers/ownerAnimalsReducer';
import { setFilteredAnimals } from '../../redux/reducers/filteredAnimalsReducer';
import { setAllFavourites } from '../../redux/reducers/favouritesReducer';
import { setAllAnimals } from '../../redux/reducers/animalsReducer';

// const pages = ['Home', 'ToDo LIST', 'DELETED'];
// const settings = ['Profile', 'Logout'];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

// const hover = createTheme({
//   primary: {
//     '&hover': {
//       color: 'white',
//     },
//   },
// });

function MUINavBar({ drawerWidth }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // смена роли пользователя (+в БД)
  const [role, changeRole] = React.useState(user?.role || 'hunter');

  React.useEffect(() => {
    if (user?.id) {
      changeRole(user?.role);
    } else {
      changeRole('hunter');
    }
  }, [user]);

  const changeRoleHandler = async (e) => {
    changeRole(e.target.value);
    dispatch({ type: 'CHANGE_ROLE', payload: { id: user?.id, role: e.target.value } });
    navigate('/');
  };
  // console.log(user?.role);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //  обнуление состояний
  const logoutHandler = async () => {
    dispatch({ type: 'LOGOUT_USER' });
    dispatch(setUserRequests([]));
    dispatch(setOwnerAnimals([]));
    dispatch(setFilteredAnimals([]));
    dispatch(setAllFavourites([]));
    dispatch(setAllAnimals([]));
    setAnchorElUser(null);
    // changeRole('hunter');
    navigate('/login');
  };

  // for search
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="static"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              id="hover2"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GERASIM_
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {user?.id
                && (
                  <Box>
                    <MenuItem component={NavLink} to="/search" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Поиск</Typography>
                    </MenuItem>
                    <MenuItem component={NavLink} to="/requests" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Мои заявки</Typography>
                    </MenuItem>
                    {user?.role === 'owner' && (
                      <MenuItem component={NavLink} to="/offers" onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Отправленные</Typography>
                      </MenuItem>
                    )}
                    <MenuItem component={Link} to={`/favourites/${user?.id}`} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Избранное</Typography>
                    </MenuItem>
                  </Box>
                )}
              </Menu>
            </Box>
            <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              id="hover2"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GERASIM_
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {user?.id
                && (
                  <Box sx={{ display: 'flex' }}>
                    <Button
                // theme={hover}
                      id="hover"
                // style={getStyles(Button:hover, 'white', theme)}
                      onClick={handleCloseNavMenu}
                      component={NavLink}
                      to="/search"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Поиск
                    </Button>
                    <Button
                      // theme={hover}
                      id="hover"
                      onClick={handleCloseNavMenu}
                      component={NavLink}
                      to="/requests"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Мои заявки
                    </Button>
                    {user?.role === 'owner' && (
                      <Button
                        // theme={hover}
                        id="hover"
                        onClick={handleCloseNavMenu}
                        component={NavLink}
                        to="/offers"
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        Отправленные
                      </Button>
                    )}
                  </Box>
                )}
            </Box>
            {user?.id
                && (
                <Box sx={{ flexGrow: 0 }}>
                  <Search>
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Роль</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={role}
                        label="Роль"
                        onChange={changeRoleHandler}
                      >
                        <MenuItem value="owner">Владелец</MenuItem>
                        <MenuItem value="hunter">Герасим</MenuItem>
                      </Select>
                    </FormControl>
                    <MenuItem
                    // theme={hover}
                      id="hover"
                      component={NavLink}
                      to={`/favourites/${user?.id}`}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">Избранное</Typography>
                    </MenuItem>
                  </Search>
                </Box>
                )}

            <Box sx={{ flexGrow: 0, ml: '2em' }}>
              {user?.id
                ? (
                  <Box>
                    <Tooltip title={`${user?.firstName} ${user?.lastName}: ${user?.email}`}>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={`/images/${user?.avatar}`} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={() => navigate(`/profile/${user?.id}`)}>
                        <Typography textAlign="center">Профиль</Typography>
                      </MenuItem>
                      <MenuItem onClick={logoutHandler}>
                        <Typography textAlign="center">Выйти</Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                )
                : (
                  <Box sx={{ display: 'flex' }}>
                    <MenuItem id="hover2" component={Link} to="/signup" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Регистрация</Typography>
                    </MenuItem>
                    <MenuItem id="hover2" component={Link} to="/login" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Войти</Typography>
                    </MenuItem>
                  </Box>
                )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default MUINavBar;
