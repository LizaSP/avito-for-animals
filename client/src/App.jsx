/* eslint-disable no-dupe-keys */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoaderWrapper from './components/HOCs/LoaderWrapper';
import ProtectedRoute from './components/HOCs/ProtectedRoutr';
import HomePage from './components/HomePage';
import NoPage from './components/NoPage';
import MUINavBar from './components/NavBar';
import SignUpPage from './components/SignUp/SignUpPage';
import './index.css';
import SearchPage from './components/Pages/SearchPage';
import RequestsPage from './components/Pages/RequestsPage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import EditProfilePage from './components/Pages/ProfilePage/EditProfilePage';
import CreateAnimal from './components/Pages/AnimalPage/CreateAnimal';
import EditAnimal from './components/Pages/AnimalPage/EditAnimal';
// import Navbar from './components/NavBar/NavBar';
// import Favourites from './components/Pages/Favourites';
import Footer from './components/Footer/Footer';
import FavouritesPage from './components/Pages/FavouritesPage';
import OneRequestPage from './components/Pages/RequestsPage/OneRequestPage/OneRequestPage';
import BabysiterForm from './components/Pages/ProfilePage/BabysiterForm';
import SendedOffersPage from './components/Pages/SendedOffersPage';
import OneOfferPage from './components/Pages/OfferPage/OneOfferPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'CHECK_USER' });
  }, []);

  const user = useSelector((state) => state.user);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{
          bgcolor: '#DBDBDB', background: '-webkit-linear-gradient(to right, #f2f2f2, #dbdbdb, #eaeaea)', background: 'linear-gradient(to right, #f2f2f2, #dbdbdb, #eaeaea)', height: '100%',
        }}
        >
          <div id="page-container" style={{ position: 'relative', minHeight: '100vh' }}>
            <div id="content-wrap" style={{ marginBottom: '5em' }}>
              <LoaderWrapper>
                <MUINavBar />
                <div style={{ padding: '2em 2em 15em 2em' }}>
                  <Routes>
                    {/* когда залогинился - не доступны */}
                    <Route element={<ProtectedRoute redirect="/" isAllowed={!user.id} />}>
                      <Route path="/signup" element={<SignUpPage type />} />
                      <Route path="/login" element={<SignUpPage type={false} />} />
                    </Route>
                    {/* доступны всем */}
                    <Route path="/" element={<HomePage />} />
                    {/* пока не залогинился - не доступны */}
                    <Route element={<ProtectedRoute redirect="/" isAllowed={!!user.id} />}>
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/search/:animal" element={<SearchPage />} />
                      <Route path="/profile/:id" element={<ProfilePage />} />
                      <Route path="/profile/edit" element={<EditProfilePage />} />
                      {/* со  стороны хантера */}
                      <Route path="/requests" element={<RequestsPage />} />
                      <Route path="/requests/:id" element={<OneRequestPage />} />
                      {/* со  стороны владельца */}
                      <Route path="/offers" element={<SendedOffersPage />} />
                      <Route path="/offers/:id" element={<OneOfferPage />} />

                      <Route path="/animals/new" element={<CreateAnimal />} />
                      <Route path="/animals/:id/edit" element={<EditAnimal />} />
                      <Route path="/favourites/:id" element={<FavouritesPage />} />
                      <Route path="/babysitter" element={<BabysiterForm />} />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                  </Routes>
                </div>
                <Footer />
              </LoaderWrapper>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default App;
