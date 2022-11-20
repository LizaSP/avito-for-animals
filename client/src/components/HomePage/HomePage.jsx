/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from 'react';
import ChoosePart from './ChoosePart';
import Carusel from './Carusel';

export default function HomePage() {
  return (
    <div style={{ minHeight: '65vh' }}>
      <Carusel />
      <ChoosePart />
    </div>
  );
}
