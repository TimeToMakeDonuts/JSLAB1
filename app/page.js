'use client'

import Header from '@/components/Header';
import Button from '@/components/Button';

export default function Page() {
  const handleClick = () => {
    alert('Dziękuję za kliknięcie!');
  };

  return (
    <div>
      <Header title="O mnie" />
      <p>Hej! Jestem Bartek i tworzę aplikacje Next.js!</p>
      <Button label="Kliknij mnie!" onClick={handleClick} />
    </div>
  );
}
