import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dados enviados:\nNome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Formulário Simples</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Mensagem:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              rows="4"
              required
            ></textarea>
          </label>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormPage;
