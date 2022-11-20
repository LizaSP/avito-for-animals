import React from 'react';

export default function NoPage() {
  return (
    // <div style={{ marginTop: '500px' }}>Fuck Off</div>
    <div style={{ position: 'relative', minHeight: 'calc(100vh - 70px)' }}>
      <h2
        style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
      >
        404 | Not Found
        <img src="/images/123.png" alt="" />
      </h2>
    </div>
  );
}
