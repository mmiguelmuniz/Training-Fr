import React, { useState } from 'react';
import './form.css';

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleValidation = () => {
    const tempErrors: { [key: string]: string } = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = " ⚠️ Name is required";
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors["email"] = "⚠️ Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors["email"] = "⚠️ Email is invalid";
      isValid = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = "⚠️  Message is required";
      isValid = false;
    }


    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (handleValidation()) {
      alert("Form submitted");
    }
  };


  return (
    
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="error">{errors["name"]}</span>
        </div>
<br />        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error">{errors["email"]}</span>
        </div>
<br />
        <div className="form-group">
          <label htmlFor="message">Describe</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className="error">{errors["message"]}</span>
        </div>
<br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
