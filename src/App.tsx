import { useEffect, useState } from 'react';
import FadeIn from './components/FadeIn';
import { Navigation } from './components/Navigation';
import { MainHero } from './components/MainHero';
import { ExpertiseSection } from './components/ExpertiseSection';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

type Mode = 'dark' | 'light';

function App() {
  const [mode, setMode] = useState<Mode>('dark');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const toggleMode = () =>
    setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation mode={mode} onToggleMode={toggleMode} />
      <FadeIn transitionDuration={700}>
        <MainHero />
        <ExpertiseSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
