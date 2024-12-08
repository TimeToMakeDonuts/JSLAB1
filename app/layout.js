'use client';

import Navbar from '@/components/Navbar';

export default function AboutLayout({ children }) {
  return (
    <html lang="pl">
      <body
        style={{
          margin:0,
          backgroundImage: 'radial-gradient(circle at top, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#4b0082',
          fontFamily: '"Comic Sans MS", sans-serif',
          textAlign: 'center',

        }}
      >
        <Navbar/>{}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            maxWidth: '600px',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
