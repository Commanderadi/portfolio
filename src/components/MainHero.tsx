import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const GITHUB = 'https://github.com/Commanderadi';
const LINKEDIN = 'https://www.linkedin.com/in/aditya-singh-89b884189/';
const AVATAR = 'https://avatars.githubusercontent.com/u/92989828?v=4';
const RESUME = '/resume.pdf';

export function MainHero() {
  return (
    <div className="yuji-container">
      <div className="yuji-about">
        <div className="image-wrap">
          <img src={AVATAR} width={150} height={150} alt="Aditya Singh" />
        </div>
        <div className="yuji-content">
          <div className="social-top">
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <h1>Aditya Singh</h1>
          <p className="hero-tagline">Analytics &amp; Full-Stack Engineer</p>
          <p className="hero-subtagline">
            AI / ML · Gen AI · Agentic AI — research pipelines, LLM tools, RAG &amp; production-facing
            intelligence.
          </p>
          <a href={RESUME} download className="hero-resume-btn">
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
          <div className="social-mobile">
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
