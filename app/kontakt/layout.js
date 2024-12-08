'use client';

export default function ContactLayout({ children }) {
  return (
    <div
      style={{
        backgroundImage: 'radial-gradient(circle at bottom, #d1c4e9, #9575cd, #512da8)',
        minHeight: '100vh',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Comic Sans MS", sans-serif',
        color: '#ffffff',
        textAlign: 'center',
      }}
    >
      <style jsx global>{`
        input,
        textarea {
          display: block;
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 10px;
          border: 2px solid #9575cd;
          font-size: 1rem;
          color: #512da8;
          background-color: #f3e5f5;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #512da8;
          box-shadow: 0 0 10px rgba(81, 45, 168, 0.5);
        }
        textarea {
          resize: vertical;
        }
        button {
          background-color: #512da8;
          color: #ffffff;
          padding: 15px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1.1rem;
          text-transform: uppercase;
          transition: background-color 0.3s ease;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        }
        button:hover {
          background-color: #9575cd;
        }
      `}</style>
      <h1
        style={{
          fontSize: '3.5rem',
          marginBottom: '20px',
          textShadow: '3px 3px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        Kontakt – Napisz do mnie!☆
      </h1>
      <div
        style={{
          color: 'rgba(0, 0, 0, 0.95)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
