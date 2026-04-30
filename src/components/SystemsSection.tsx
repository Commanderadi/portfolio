import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faShieldHalved,
  faFlask,
  faGaugeHigh,
  faNetworkWired,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { engineeringPractices } from '../data';

const ICONS = [
  faEye,
  faShieldHalved,
  faFlask,
  faGaugeHigh,
  faNetworkWired,
  faPeopleGroup,
] as const;

export function SystemsSection() {
  return (
    <div className="yuji-container" id="engineering">
      <section className="systems-section" aria-labelledby="systems-heading">
        <h1 id="systems-heading">Production &amp; scale</h1>
        <p className="systems-lead">
          Engineering habits that matter at <strong>high-scale product companies</strong> and for{' '}
          <strong>long-lived systems</strong>—the same bar whether the stack is a startup monolith
          or a multi-service platform.
        </p>
        <div className="systems-grid">
          {engineeringPractices.map((item, i) => (
            <article key={item.title} className="systems-card">
              <FontAwesomeIcon icon={ICONS[i]} className="systems-card-icon" size="lg" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul className="systems-keywords">
                {item.keywords.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
