import Link from 'next/link';


export default function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
        marginBottom: '20px',
        gap: '10px',
        background: '#f0f0f0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        zIndex: '1000',
      }}
    >
      <Link href="/">Strona główna</Link>
      <Link href="/moje-zainteresowania">Moje zainteresowania</Link>
      <Link href="/ulubiony-film">Ulubiony film</Link>
      <Link href="/kontakt">Kontakt</Link>
    </nav>
  );
}
