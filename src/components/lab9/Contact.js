import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Wiadomość od ${formData.name}: ${formData.message}`);
  };

  return (
    <div>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label>Wiadomość:</label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default Contact;
