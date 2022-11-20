import React from 'react';
import { Link } from 'react-router-dom';

export default function Chat({ request }) {
  return (
    <Link to={`/chat/${request?.id}`} style={{ display: 'flex', justifyContent: 'center' }}>
      <button type="button" className="button is-info">Открыть чат</button>
    </Link>
  );
}
