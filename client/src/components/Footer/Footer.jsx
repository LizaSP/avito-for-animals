import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-dark text-center text-white"
      style={{
        opacity: '.85', position: 'absolute', bottom: 0, width: '100%', height: '14em', marginTop: '5em',
      }}
    >
      <div className="container p-4">

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center" />
          </form>
        </section>
        <Box sx={{
          display: 'flex', m: '0 auto 0', width: '100%', justifyContent: 'center',
        }}
        >
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              // marginLeft: 62,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GERASIM_
          </Typography>
        </Box>
        <section className="mb-4">
          <h6 style={{ marginTop: '1em', marginBottom: '3em' }}>
            Gerasim - это сайт, на котором Вы можете найти друга из мира животных. Наш
            сервис поможет Вам найти питомца или заработать, присмотрев за ним.
            Хорошего настроения и любите животных!
          </h6>
        </section>

        <section className="">

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: '12px' }}>Team Leader</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a target="_blank" href="https://github.com/LizaSP" className="text-white" rel="noreferrer">Елизавета Солодовник</a>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: '12px' }}>Full Stack</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a target="_blank" href="https://github.com/ShamilGz" className="text-white" rel="noreferrer">Шамиль Газалапов </a>
                </li>

              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: '12px' }}>Full Stack</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a target="_blank" href="https://github.com/Ksesha1" className="text-white" rel="noreferrer">Ксения Паршикова</a>
                </li>

              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: '12px' }}>Full Stack</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a target="_blank" href="https://github.com/DaniilMartakov" className="text-white" rel="noreferrer">Даниил Мартаков</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </footer>
  );
}
