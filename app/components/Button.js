'use client';

export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: '#ff4081',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}
