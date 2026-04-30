import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { career } from '../data';

export function TimelineSection() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {career.map((job) => (
            <VerticalTimelineElement
              key={`${job.company}-${job.period}-${job.title}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={job.period}
              iconStyle={{ background: '#5000ca', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{job.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {job.company} · {job.employmentType}
              </h4>
              <p className="timeline-location">{job.location}</p>
              <p className="timeline-body">{job.description}</p>
              <p className="timeline-stack">{job.stack}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
