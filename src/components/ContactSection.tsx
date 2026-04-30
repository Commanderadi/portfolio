import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const EMAIL = 'adityasingh3499@gmail.com';

export function ContactSection() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [contactErr, setContactErr] = useState(false);
  const [msgErr, setMsgErr] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setNameErr(!name.trim());
    setContactErr(!contact.trim());
    setMsgErr(!message.trim());
    if (!name.trim() || !contact.trim() || !message.trim()) return;
    const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio: ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${contact}`)}`;
    window.location.href = mail;
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let&apos;s collaborate and make it happen!
          </p>
          <form className="contact-form" onSubmit={send} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="nm">Your Name</label>
                <input
                  id="nm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What&apos;s your name?"
                  autoComplete="name"
                />
                {nameErr && <span className="error">Please enter your name</span>}
              </div>
              <div className="field">
                <label htmlFor="em">Email / Phone</label>
                <input
                  id="em"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="How can I reach you?"
                  autoComplete="email"
                />
                {contactErr && (
                  <span className="error">Please enter your email or phone</span>
                )}
              </div>
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send me any inquiries or questions"
              />
              {msgErr && <span className="error">Please enter the message</span>}
            </div>
            <button type="submit" className="send-btn">
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
