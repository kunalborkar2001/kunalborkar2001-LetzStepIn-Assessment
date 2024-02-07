import React, { useState } from 'react';

const ContactForm = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to your backend
    const formData = {
      category,
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from your backend
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Select a category</option>
        <option value="general">General</option>
        <option value="sales">Sales</option>
        <option value="support">Support</option>
      </select>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;