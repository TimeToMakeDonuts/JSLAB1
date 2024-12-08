'use client';

export default function InterestsLayout({ children }) {
  return (
    <div
      style={{
        backgroundImage: 'radial-gradient(circle at top, #89f7fe, #66a6ff, #005bea, #2b32b2)',
        minHeight: '100vh',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: '"Comic Sans MS", sans-serif',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '3px 3px 10px rgba(0,0,0,0.2)',
        }}
      >
        Moje zainteresowania!
      </h1>
      <div
        style={{
          color: 'rgba(0, 0, 0, 0.9)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
          maxWidth: '700px',
          width: '100%',
          lineHeight: '1.8',
        }}
      >
        {children}
      </div>
    </div>
  );
}
