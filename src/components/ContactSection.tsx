import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const EMAIL = 'adityasingh3499@gmail.com';

/** Encode form data as x-www-form-urlencoded, required by Netlify Forms. */
function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [contactErr, setContactErr] = useState(false);
  const [msgErr, setMsgErr] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasName = !!name.trim();
    const hasContact = !!contact.trim();
    const hasMsg = !!message.trim();
    setNameErr(!hasName);
    setContactErr(!hasContact);
    setMsgErr(!hasMsg);
    if (!hasName || !hasContact || !hasMsg) return;

    setStatus('sending');
    try {
      // Netlify Forms: works automatically once deployed on Netlify with the
      // hidden form registered in index.html / the form's data-netlify attr.
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name, contact, message }),
      });
      setStatus('sent');
      setName('');
      setContact('');
      setMessage('');
    } catch {
      // Fall back to mailto so the message is never lost, even if the
      // Netlify Forms endpoint is unreachable (e.g. running outside Netlify).
      setStatus('error');
      const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio: ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${contact}`)}`;
      window.location.href = mail;
    }
  };

  if (status === 'sent') {
    return (
      <div id="contact">
        <div className="items-container">
          <div className="contact_wrapper">
            <h1>Contact Me</h1>
            <p className="contact-success">
              <FontAwesomeIcon icon={faCircleCheck} /> Thanks — your message is on its way. I
              typically reply within a day or two.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Open to analytics, full-stack, and{' '}
            <strong>AI / ML, GenAI &amp; agentic</strong> projects—let&apos;s build something
            useful.
          </p>
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={send}
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-row">
              <div className="field">
                <label htmlFor="nm">Your Name</label>
                <input
                  id="nm"
                  name="name"
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
                  name="contact"
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
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send me any inquiries or questions"
              />
              {msgErr && <span className="error">Please enter the message</span>}
            </div>
            <button type="submit" className="send-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'} <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            {status === 'error' && (
              <span className="error">
                Couldn&apos;t submit directly — opening your email client instead.
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
