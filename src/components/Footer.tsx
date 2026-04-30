import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const GITHUB = 'https://github.com/Commanderadi';
const LINKEDIN = 'https://www.linkedin.com/in/aditya-singh-89b884189/';
const TEMPLATE = 'https://github.com/yujisatojr/react-portfolio-template';

export function Footer() {
  return (
    <footer className="yuji-footer">
      <div>
        <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>
        Layout inspired by{' '}
        <a href={TEMPLATE} target="_blank" rel="noreferrer">
          Yuji Sato&apos;s React portfolio template
        </a>
        . Content by Aditya Singh.
      </p>
    </footer>
  );
}
