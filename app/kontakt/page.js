import Header from '@/components/Header';

export default function Page() {
    return (
      <div>
        <Header title="Kontakt" />
        <form>
          <label>
            Imię:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Wiadomość:
            <textarea name="message"></textarea>
          </label>
          <br />
          <button type="submit">Wyślij!</button>
        </form>
      </div>
    );
  }
  