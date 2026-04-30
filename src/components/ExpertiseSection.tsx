import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { expertise } from '../data';

const ICONS = [faChartLine, faReact, faWandMagicSparkles] as const;

export function ExpertiseSection() {
  return (
    <div className="yuji-container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <p className="skills-lead">
          Analytics engineering, production-style full-stack delivery, and applied AI—grounded in
          shipping internal platforms, BI, and automation for real operators and leadership.
        </p>
        <div className="skills-grid">
          {expertise.map((block, i) => (
            <div key={block.title} className="skill">
              <FontAwesomeIcon icon={ICONS[Math.min(i, 2)]} size="3x" />
              <h3>{block.title}</h3>
              <p>{block.body}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {block.tech.map((label) => (
                  <span key={label} className="chip">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
