import React, { useState } from 'react';

/**
 * validateEmail - checks if a string is a valid email address
 * @param email - the email string to validate
 * @returns true if valid, false otherwise
 */
function validateEmail(email: string): boolean {
  // Simple regex for demonstration
  return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email);
}

/**
 * formatPhone - formats a 10-digit phone number as (XXX) XXX-XXXX
 * @param phone - the phone string to format
 * @returns formatted phone string or original if not 10 digits
 */
function formatPhone(phone: string): string {
  // Remove non-digits
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
}

/**
 * ContactForm - form for users to send a message
 * - Validates name, email, phone, and message fields
 * - Uses helper functions for email validation and phone formatting
 * - Shows error messages and success feedback
 */
export default function ContactForm() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  /**
   * validate - checks all fields and returns error messages
   * @returns object with error messages for each field
   */
  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email address.';
    if (!message.trim()) newErrors.message = 'Message is required.';
    if (phone && phone.replace(/\D/g, '').length !== 0 && phone.replace(/\D/g, '').length !== 10) {
      newErrors.phone = 'Phone must be 10 digits.';
    }
    return newErrors;
  }

  /**
   * handleSubmit - handles form submission, validates fields, and sets feedback
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // ...send data to backend or show success
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className={errors.name ? 'invalid' : ''}
          />
        </label>
        {errors.name && <div className="form-error">{errors.name}</div>}

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={errors.email ? 'invalid' : ''}
          />
        </label>
        {errors.email && <div className="form-error">{errors.email}</div>}

        <label>
          Phone (optional)
          <input
            type="tel"
            name="phone"
            value={formatPhone(phone)}
            onChange={e => setPhone(e.target.value)}
            maxLength={14}
            className={errors.phone ? 'invalid' : ''}
            placeholder="(555) 555-5555"
          />
        </label>
        {errors.phone && <div className="form-error">{errors.phone}</div>}

        <label>
          Message
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            className={errors.message ? 'invalid' : ''}
          />
        </label>
        {errors.message && <div className="form-error">{errors.message}</div>}

        <button type="submit">Send</button>
        {submitted && <div className="form-success">Message sent! Thank you.</div>}
      </form>
    </section>
  );
}
