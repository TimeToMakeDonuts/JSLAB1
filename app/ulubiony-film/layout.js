'use client';

export default function MovieLayout({ children }) {
  return (
    <div
      style={{
        backgroundImage: 'radial-gradient(circle at center, #ff512f, #f09819, #f857a6, #ff5858)',
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
          textShadow: '3px 3px 10px rgba(0,0,0,0.3)',
        }}
      >
        Ulubiony film oraz gra!
      </h1>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
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
